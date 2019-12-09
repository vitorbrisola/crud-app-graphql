/**
 * @flow
 * @relayHash ce6ff66a225e2336effea897ec02257e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addQuestionMutationVariables = {|
  input: string
|};
export type addQuestionMutationResponse = {|
  +addQuestion: ?{|
    +id: string
  |}
|};
export type addQuestionMutation = {|
  variables: addQuestionMutationVariables,
  response: addQuestionMutationResponse,
|};
*/


/*
mutation addQuestionMutation(
  $input: String!
) {
  addQuestion(description: $input) {
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
    "name": "addQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
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
    "name": "addQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addQuestionMutation",
    "id": null,
    "text": "mutation addQuestionMutation(\n  $input: String!\n) {\n  addQuestion(description: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bee66b8e488fc8ca65323dbc32a7c224';
module.exports = node;
