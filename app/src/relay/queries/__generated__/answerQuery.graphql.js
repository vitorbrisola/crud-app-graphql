/**
 * @flow
 * @relayHash eddeb95c9ff54e51fc699d7c5af0cc92
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type answerQueryVariables = {|
  input: string
|};
export type answerQueryResponse = {|
  +answer: ?{|
    +text: ?string,
    +isCorrect: boolean,
  |}
|};
export type answerQuery = {|
  variables: answerQueryVariables,
  response: answerQueryResponse,
|};
*/


/*
query answerQuery(
  $input: ID!
) {
  answer(id: $input) {
    text
    isCorrect
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isCorrect",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "answerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "answer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Answer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "answerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "answer",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Answer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "answerQuery",
    "id": null,
    "text": "query answerQuery(\n  $input: ID!\n) {\n  answer(id: $input) {\n    text\n    isCorrect\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ad7930b34fd6ee8aabcd0023fad19d62';
module.exports = node;
