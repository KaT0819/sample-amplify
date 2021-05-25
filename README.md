# Amplify Sample

## Install Amplify CLI
```
npm install -g @aws-amplify/cli


```

## Amplify Init
```
amplify configure
# リージョンの選択
# IAM ユーザの作成
# ポリシーをAdministratorAccessからAdministratorAccess-Amplifyに変更
# 作成したIAMのAccessKeyとSecretAccessKeyを入力

amplify init
# 作成したIAMのprofileがcredentialsに作成されているのでprofileを指定

```

※amplify init にてs3:SetBucketEncryption Access Deniedエラーが発生
s3:PutEncryptionConfiguration　権限を追加したら無事正常終了


## 認証（Cognito）
```
amplify add auth

Using service: Cognito, provided by: awscloudformation
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource awsamplifysample6897232f locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```


## API（GraphQL）
```
amplify add api

? Please select from one of the below mentioned services: GraphQL
? Provide API name: <your api name>
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at <your project>\amplify\backend\api\<your api name>\schema.graphql 
or place .graphql files in a directory at <your project>\amplify\backend\api\<your api name>\schema
? Do you want to edit the schema now? No
Successfully added resource <your api name> locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```

## Rekognition
```
amplify add predictions

? Please select from one of the categories below Identify
? What would you like to identify? Identify Labels
? Provide a friendly name for your resource identifyLabels6c8a5764
? Would you like use the default configuration? Default Configuration
? Who should have access? Auth users only
Successfully added resource identifyLabels6c8a5764 locally

? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src\graphql\**\*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src\API.ts
\ Updating resources in the cloud. This may take a few minutes...

```

## push
```
amplify push
```

## create app
```
npx create-react-app predictions-app

cd predictions-app

npm install aws-amplify aws-amplify-react
```



## GraphQL
スキーマ
@model  DynamoDBの作成ディレクティブ

カラム !指定でrequired
  id: ID!


## create account
```
import React from 'react';
import {
    AmplifyAuthenticator,
    AmplifySignUp
} from '@aws-amplify/ui-react';

<AmplifyAuthenticator>
    <AmplifySignUp
        slot="sign-up"
        formFields={[
            { type: "username" },
            { type: "password" },
            { type: "email" }
        ]}
    />
</AmplifyAuthenticator>
```
