## 1. React + TypeScript
npx create-react-app my-app --template typescript

## 2. [TailwindCSS](https://www.tailwindcss.cn/docs/installation)

## 3. [Axios](https://github.com/axios/axios) + [Axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)


 Axios-mock-adapter用于拦截请求（开发环境测试使用，生产环境须在[APP.tsx](./src/App.tsx)中禁用, [mock数据](./src/lib/mock.ts)通过useState可伪持久化）
## 4. React-router-dom
npm i react-router-dom

## 5. [Next UI](https://nextui.org/docs/guide/installation)
npm install @nextui-org/react framer-motion

## 6. Data Context
[全局数据中心](./src/lib/dataContext.tsx)