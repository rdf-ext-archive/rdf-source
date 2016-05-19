'use strict'

const FilterStream = require('rdf-filter-stream')
const Readable = require('stream').Readable

class Source extends Readable {
  constructor () {
    super()
  }

  match (subject, predicate, object, graph) {
    return new FilterStream(this, subject, predicate, object, graph)
  }
}

module.exports = Source
