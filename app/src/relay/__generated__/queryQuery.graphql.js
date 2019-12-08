/**
 * @flow
 * @relayHash 50e1b0cba203acb9badf8568df65d805
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryQueryVariables = {||};
export type queryQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string,
    +description: ?string,
  |}>
|};
export type queryQuery = {|
  variables: queryQueryVariables,
  response: queryQueryResponse,
|};
*/


/*
query queryQuery {
  questions {
    id
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "questions",
    "storageKey": null,
    "args": null,
    "concreteType": "question",
    "plural": true,
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
    "name": "queryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "queryQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "queryQuery",
    "id": null,
    "text": "query queryQuery {\n  questions {\n    id\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9a2830d6bac0363a6633853ba9f6e93';
module.exports = node;
