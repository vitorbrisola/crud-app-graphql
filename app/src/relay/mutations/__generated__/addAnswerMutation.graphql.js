/**
 * @flow
 * @relayHash 32a4346ab03197d6825238f92078b94a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addAnswerInput = {|
  text: string,
  isCorrect: boolean,
|};
export type addAnswerMutationVariables = {|
  input: addAnswerInput
|};
export type addAnswerMutationResponse = {|
  +addAnswer: ?{|
    +id: string
  |}
|};
export type addAnswerMutation = {|
  variables: addAnswerMutationVariables,
  response: addAnswerMutationResponse,
|};
*/


/*
mutation addAnswerMutation(
  $input: addAnswerInput!
) {
  addAnswer(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addAnswerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addAnswer",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
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
    "name": "addAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addAnswerMutation",
    "id": null,
    "text": "mutation addAnswerMutation(\n  $input: addAnswerInput!\n) {\n  addAnswer(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ccc5d9ec166e567a6ddb9ff53164d48e';
module.exports = node;
