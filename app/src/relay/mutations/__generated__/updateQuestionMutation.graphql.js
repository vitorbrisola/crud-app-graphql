/**
 * @flow
 * @relayHash ca55298c25fbe5b878db25c66ef4efab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateQuestionMutationVariables = {|
  input: string
|};
export type updateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +id: string,
    +description: ?string,
  |}
|};
export type updateQuestionMutation = {|
  variables: updateQuestionMutationVariables,
  response: updateQuestionMutationResponse,
|};
*/


/*
mutation updateQuestionMutation(
  $input: String!
) {
  updateQuestion(id: $input) {
    id
    description
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
    "name": "updateQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
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
    "name": "updateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateQuestionMutation",
    "id": null,
    "text": "mutation updateQuestionMutation(\n  $input: String!\n) {\n  updateQuestion(id: $input) {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '202e5138dfeabd78a6c9537f7c20792a';
module.exports = node;
