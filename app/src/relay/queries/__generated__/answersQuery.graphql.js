/**
 * @flow
 * @relayHash fde738e34c57248e60040bbf980bd6c3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type answersQueryVariables = {||};
export type answersQueryResponse = {|
  +answers: ?$ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type answersQuery = {|
  variables: answersQueryVariables,
  response: answersQueryResponse,
|};
*/


/*
query answersQuery {
  answers {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "answers",
    "storageKey": null,
    "args": null,
    "concreteType": "Answer",
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
    "name": "answersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "answersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "answersQuery",
    "id": null,
    "text": "query answersQuery {\n  answers {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e39b4aeeb41a620259c1d8eee7dfcd9e';
module.exports = node;
