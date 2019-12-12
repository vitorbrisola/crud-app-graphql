/**
 * @flow
 * @relayHash 109df28a48b8282f844e14da2c2f67e5
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
  $input: ID!
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
    "type": "ID!",
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
    "text": "mutation deleteQuestionMutation(\n  $input: ID!\n) {\n  deleteQuestion(id: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9a17512618c31249149ba4296ca33a47';
module.exports = node;
