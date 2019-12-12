/**
 * @flow
 * @relayHash ef78d1245e261ba1ef7afeb526c6a98a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type upAnswerInput = {|
  id: string,
  text: string,
  isCorrect: boolean,
|};
export type updateAnswerMutationVariables = {|
  input: upAnswerInput
|};
export type updateAnswerMutationResponse = {|
  +updateAnswer: ?{|
    +id: string
  |}
|};
export type updateAnswerMutation = {|
  variables: updateAnswerMutationVariables,
  response: updateAnswerMutationResponse,
|};
*/


/*
mutation updateAnswerMutation(
  $input: upAnswerInput!
) {
  updateAnswer(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "upAnswerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateAnswer",
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
    "name": "updateAnswerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateAnswerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateAnswerMutation",
    "id": null,
    "text": "mutation updateAnswerMutation(\n  $input: upAnswerInput!\n) {\n  updateAnswer(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '473d21c91169dfdc5caa299904bc1544';
module.exports = node;
