/**
 * @flow
 * @relayHash 8a1c456b741f22eefb37aacc894515f8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addQuestionInput = {|
  description: string,
  answers: $ReadOnlyArray<?string>,
|};
export type addQuestionMutationVariables = {|
  input: addQuestionInput
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
  $input: addQuestionInput!
) {
  addQuestion(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addQuestionInput!",
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
    "text": "mutation addQuestionMutation(\n  $input: addQuestionInput!\n) {\n  addQuestion(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '51bb7140965daeaca6b477f9f9e12f70';
module.exports = node;
