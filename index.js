'use strict'

const FilterStream = require('rdf-stream-filter')
const Readable = require('readable-stream')

class Source extends Readable {
  constructor () {
    super()

    this._readableState.objectMode = true
  }

  match (subject, predicate, object, graph) {
    return new FilterStream(this, subject, predicate, object, graph)
  }
}

module.exports = Source
