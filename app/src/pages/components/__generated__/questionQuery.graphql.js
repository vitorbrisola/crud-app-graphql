/**
 * @flow
 * @relayHash 90a46ed0dfef519158e03dde0bdaea37
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type questionQueryVariables = {||};
export type questionQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string,
    +description: string,
  |}>
|};
export type questionQuery = {|
  variables: questionQueryVariables,
  response: questionQueryResponse,
|};
*/


/*
query questionQuery {
  questions {
    id
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questions",
    "storageKey": null,
    "args": null,
    "concreteType": "question",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
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
    "name": "questionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "questionQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "questionQuery",
    "id": null,
    "text": "query questionQuery {\n  questions {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b99ebbadf0e7bf9761fea63656e1ea05';
module.exports = node;
