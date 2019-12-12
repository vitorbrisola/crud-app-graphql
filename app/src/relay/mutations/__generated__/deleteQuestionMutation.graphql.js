/**
 * @flow
 * @relayHash d815e7203a7a027d9a6a451e5f9a3432
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteQuestionMutationVariables = {|
  input: string
|};
export type deleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +id: string
  |}
|};
export type deleteQuestionMutation = {|
  variables: deleteQuestionMutationVariables,
  response: deleteQuestionMutationResponse,
|};
*/


/*
mutation deleteQuestionMutation(
  $input: String!
) {
  deleteQuestion(id: $input) {
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
    "name": "deleteQuestion",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteQuestionMutation",
    "id": null,
    "text": "mutation deleteQuestionMutation(\n  $input: String!\n) {\n  deleteQuestion(id: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e43c4ddc40b0d78d1d331a8ff0698d14';
module.exports = node;
