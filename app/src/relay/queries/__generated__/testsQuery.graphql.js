/**
 * @flow
 * @relayHash 7ef71ada9b4ef5da8c7c177c976c7162
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type testsQueryVariables = {||};
export type testsQueryResponse = {|
  +tests: ?$ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type testsQuery = {|
  variables: testsQueryVariables,
  response: testsQueryResponse,
|};
*/


/*
query testsQuery {
  tests {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tests",
    "storageKey": null,
    "args": null,
    "concreteType": "Test",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "testsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "testsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "testsQuery",
    "id": null,
    "text": "query testsQuery {\n  tests {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d071a9ecf39a31b0faac6d169fbb911';
module.exports = node;
