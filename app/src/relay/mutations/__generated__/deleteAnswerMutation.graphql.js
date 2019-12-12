/**
 * @flow
 * @relayHash 7baec734aff5a350b915023b613adf18
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteAnswerMutationVariables = {|
  input: string
|};
export type deleteAnswerMutationResponse = {|
  +deleteAnswer: ?{|
    +id: string
  |}
|};
export type deleteAnswerMutation = {|
  variables: deleteAnswerMutationVariables,
  response: deleteAnswerMutationResponse,
|};
*/


/*
mutation deleteAnswerMutation(
  $input: String!
) {
  deleteAnswer(id: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Answer",
    "plural": false,
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
    "name": "deleteAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteAnswerMutation",
    "id": null,
    "text": "mutation deleteAnswerMutation(\n  $input: String!\n) {\n  deleteAnswer(id: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '30f8849d1eb213b67170418359fde1e3';
module.exports = node;
