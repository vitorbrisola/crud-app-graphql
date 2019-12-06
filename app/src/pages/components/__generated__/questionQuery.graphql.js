/**
 * @flow
 * @relayHash 2a5dac6e165341dd65b73788bbe9fcef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type questionQueryVariables = {||};
export type questionQueryResponse = {|
  +question: {|
    +id: string,
    +description: string,
  |}
|};
export type questionQuery = {|
  variables: questionQueryVariables,
  response: questionQueryResponse,
|};
*/


/*
query questionQuery {
  question {
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
    "name": "question",
    "storageKey": null,
    "args": null,
    "concreteType": "question",
    "plural": false,
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
    "text": "query questionQuery {\n  question {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49c5e771bcd99578276bdca6b1e0cfa8';
module.exports = node;
