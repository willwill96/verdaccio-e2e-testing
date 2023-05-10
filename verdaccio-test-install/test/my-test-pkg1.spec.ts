import {describe, expect, it} from 'vitest'
const {identity} = require('my-test-pkg1')

describe('my-test-pkg1', () =>{
    it('returns the correct value', ()=>{
        expect(identity("Foo Bar")).toEqual("Foo Bar")
    })
})