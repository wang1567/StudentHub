# StudentHub - 全端學生管理系統

**StudentHub** 是一個全端學生資料管理系統，旨在提供簡單的學生資料 CRUD 操作。專案使用 **React** 作為前端框架，**Node.js** 和 **Express** 作為後端伺服器，並使用 **MongoDB** 來存儲資料。

## 功能概述

- **學生資料管理**: 允許用戶新增、查詢、更新及刪除學生資料。
- **座號與名稱格式驗證**: 驗證學生的學號格式，保證資料一致性。
- **RESTful API**: 提供標準的 RESTful API 接口來進行學生資料的操作。

---

## 專案架構圖
以下是本專案的架構圖，展示了前端、後端、資料庫的互動流程：
![diagram](https://imgur.com/BqF3Nzo.png).
```

##專案流程圖
```
用戶操作前端界面
      ↓
  前端處理
 ┌──────────────────────────────────┐
 │           新增學生               │ ──→ 發送 POST 請求到 /api/v1/user/insertOne
 └──────────────────────────────────┘
 │           查詢學生               │ ──→ 發送 GET 請求到 /api/v1/user/findByName 或是 /api/v1/user/findById
 └──────────────────────────────────┘
 │           更新學生               │ ──→ 發送 PUT 請求到 /api/v1/user/updateById 或是 /api/v1/user/updateByName
 └──────────────────────────────────┘
 │           刪除學生               │ ──→ 發送 DELETE 請求到 /api/v1/user/deleteByName 或是 /api/v1/user/deleteById
 └──────────────────────────────────┘
      ↓
  後端路由匹配對應操作
      ↓
  控制器調用服務層實現業務邏輯
      ↓
  服務層與數據模型交互，完成 MongoDB 操作
      ↓
  資料庫操作 (插入、查詢、更新、刪除)
      ↓
  前端動態更新界面 (顯示操作結果)
      ↓
  結束

```

##  安裝與執行指引
### **1. 下載專案**
首先，將專案從 GitHub 複製到您的本地機器：
```bash
複製程式碼
git clone https://github.com/yourusername/StudentHub.git
cd StudentHub
```
### **2. 安裝前端依賴**
進入 react-ts-mid 目錄並安裝所需的 npm 套件：
```bash
複製程式碼
cd react-ts-mid
npm install
```
啟動前端開發伺服器：

```bash
複製程式碼
npm start
```
前端應用將會運行在 http://localhost:2888。

### **3. 安裝後端依賴**
進入 mondoDemo 目錄並安裝所需的 npm 套件：
```bash
複製程式碼
cd mondoDemo
npm install
```
### **4. 設定 MongoDB**
確保您已經安裝並啟動了 MongoDB。如果使用 MongoDB Atlas 或其他雲端資料庫，請在 .env 檔案中設定資料庫連接 URL。
```bash
複製程式碼
MONGO_URI=mongodb://localhost:27017/studenthub
```
### **5. 啟動後端伺服器**
在 mondoDemo 目錄啟動後端伺服器：
```bash
複製程式碼
npm start
```
後端將會運行在 http://localhost:5173。

### **6. 完成**
現在，您可以在瀏覽器中打開前端頁面並開始使用應用程式。

## API 規格說明
以下是本專案中提供的 API 規格，包括請求方式、請求參數及回應格式。
### 1.查詢所有學生資料
+ **使用到的URL**
+ `http://localhost:2888/api/v1/user/findAll`
+ ###### 取得的Response
    - 
        ```json
        {
            "code": 200,
            "message": "find sucess",
            "body": [
                {
                    "_id": "6761a9da059b9c65a4204fbf",
                    "userName": "tkuee0787",
                    "sid": "1",
                    "name": "張佳慧",
                    "department": "電機工程系",
                    "grade": "四年級",
                    "class": "A",
                    "email": "tkuee0787@tkuim.com"
                },
                {
                    "_id": "6761a9da059b9c65a4204fc0",
                    "userName": "tkubm9553",
                    "sid": "2",
                    "name": "蔡文杰",
                    "department": "企業管理系",
                    "grade": "二年級",
                    "class": "A",
                    "email": "tkubm9553@tkuim.com"
                },...
            ]
        }
        ```
### 2.根據 ID 或姓名查詢學生資料
+ **使用到的URL**
    + `http://localhost:2888/api/v1/user/findByName`
    + `http://localhost:2888/api/v1/user/findById`
+ ###### 取得的Request

    ```
    id": "6761a9da059b9c65a4204fc0
    ```
    or
    ```
    name=蔡文杰
    ```

+ ###### 取得的Response
    - 
        ```json
        {
            "code": 200,
            "message": "find success",
            "body": {
                "_id": "6761a9da059b9c65a4204fc0",
                "userName": "tkubm9553",
                "sid": "2",
                "name": "蔡文杰",
                "department": "企業管理系",
                "grade": "二年級",
                "class": "A",
                "email": "tkubm9553@tkuim.com"
            }
        }
        ```
    
### 3.新增學生資料
+ **使用到的URL**
    + `http://localhost:2888/api/v1/user/findByName`
+ ###### 取得的Request
    ```json
    {
        "userName":"tku1567",
        "name": "王國全",
        "department": "資訊管理系",
        "grade": "六年級",
        "class": "B",
        "email": "tkume1567@tku.com"
    }
    ```
+ ###### 取得的Response
    - 
        ```json
        {
            "code": 200,
            "message": "insert success",
            "body": {
                       "userName":"tku1567",
                       "name": "王國全",
                       "department": "資訊管理系",
                       "grade": "六年級",
                       "class": "B",
                       "email": "tkume1567@tku.com",
                       "_id": "6762998299d3334a529baafe"
            }
        }
        ```
    
### 4.利用ID或是姓名來刪除學生資料
+ **使用到的URL** 
    + `http://localhost:2888/api/v1/user/deletedById`
    + `http://localhost:2888/api/v1/user/deletedByName`
+ ###### 取得的Request
    ```
    id=675ed9f4bc8f2ebc70989e03
    或者
    name=張佳慧
    ```
+ ###### 取得的Response
    - 
        ```json
        {
            "code": 200,
            "message": "sucess",
            "body": {
                "acknowledged": true,
                "deletedCount": 1
            }
        }
        ```
  
### 5.利用ID或是姓名來更新學生資料
+ **使用到的URL**
    + `http://localhost:2888/api/v1/user/updateByName`
    + `http://localhost:2888/api/v1/user/updateById`
+ ###### 取得的Request
  -
    ```
    id=675ed9f4bc8f2ebc70989e03
    或者
    name=張佳慧
    ```
  -  
    更改的部分
    ```json
    {
        "department": "風險管理系",
    }
    ```
+ ###### 取得的Response
    - 
        ```json
        {
            "code": 200,
            "message": "Update successful",
            "body": {
                "_id": "675ed9f4bc8f2ebc70989e03",
                "userName": "tkumb1234",
                "sid": "1",
                "name": "張佳慧",
                "department": "風險管理系",
                "grade": "四年級",
                "class": "A",
                "email": "tkuee0787@tkuim.com"
            }
        }
     

