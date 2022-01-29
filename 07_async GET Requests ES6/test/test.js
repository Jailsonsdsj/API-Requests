console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = async () => {
        try {
          if(response.ok){
            const jsonResponse = _
            renderRawResponse(jsonResponse)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne, 'Did you call `renderRawResponse` with `jsonResponse` as an argument?')
  });
});
