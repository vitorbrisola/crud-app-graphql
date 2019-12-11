/**
 * @flow
 * @relayHash 30d0c5d0d9e38b92ab19550ecb544dd9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateQuestionInput = {|
  id: string,
  description: string,
|};
export type updateQuestionMutationVariables = {|
  input: updateQuestionInput
|};
export type updateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +id: string
  |}
|};
export type updateQuestionMutation = {|
  variables: updateQuestionMutationVariables,
  response: updateQuestionMutationResponse,
|};
*/


/*
mutation updateQuestionMutation(
  $input: updateQuestionInput!
) {
  updateQuestion(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateQuestionInput!",
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
        "name": "input",
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
    "text": "mutation updateQuestionMutation(\n  $input: updateQuestionInput!\n) {\n  updateQuestion(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6d318609e74cca5dac43e808256c3fc1';
module.exports = node;
