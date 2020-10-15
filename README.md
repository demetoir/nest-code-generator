# nest.js typescript code generator

[hygen.io](http://www.hygen.io/) base [nest.js](https://nestjs.com/) typescript code generator


## installation
```shell script
npm install nest-code-generator
```

## usage
```shell script
yarn nest-code-generator generate {generate-type} {name}
```


```shell script
yarn nest-code-generator generate input-type user/create-one
```

this will generate code at ```src/user``` directory

## generate directory structure

```
./example
└── app
    ├── constants.ts
    ├── decorators
    │   ├── create-one-user-input-type-args.decorator.spec.ts
    │   ├── create-one-user-input-type-args.decorator.ts
    │   ├── create-one-user-mutation.decorator.spec.ts
    │   ├── create-one-user-mutation.decorator.ts
    │   ├── get-one-user-query.decorator.spec.ts
    │   ├── get-one-user-query.decorator.ts
    │   └── index.ts
    ├── enums
    │   ├── index.ts
    │   ├── role.enum.spec.ts
    │   └── role.enum.ts
    ├── input-types
    │   ├── create-one-user.input-type.spec.ts
    │   └── create-one-user.input-type.ts
    ├── interface-types
    │   ├── node.interface-type.spec.ts
    │   └── node.interface-type.ts
    └── object-types
        ├── user.object-type.factory.spec.ts
        ├── user.object-type.factory.ts
        ├── user.object-type.spec.ts
        └── user.object-type.ts

```

## generate types 

* Nest.js 
    - [ ] module
    - [ ] service
    - [ ] controller
    - [ ] provider
    - [ ] filter
    - [ ] pipe
    - [ ] guard
    - [ ] interceptor
    - [ ] decorator
    - [ ] interface
    - [ ] middleware
    - [ ] gateway

* GraphQL
    - [X] input-type
    - [X] object-type
    - [X] interface-type
    - [X] mutation-decorator
    - [X] query-decorator
    - [X] enum-type
    - [ ] union-type
    - [ ] resolver
    - [ ] scalar
    
* TypeOrm
    - [ ] entity
    
    
    

## configuration

.hygen.js

## limitation


 