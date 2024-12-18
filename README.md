# StudentHub - 全端學生管理系統

**StudentHub** 是一個全端學生資料管理系統，旨在提供簡單的學生資料 CRUD 操作。專案使用 **React** 作為前端框架，**Node.js** 和 **Express** 作為後端伺服器，並使用 **MongoDB** 來存儲資料。

## 功能概述

- **學生資料管理**: 允許用戶新增、查詢、更新及刪除學生資料。
- **座號與名稱格式驗證**: 驗證學生的學號格式，保證資料一致性。
- **RESTful API**: 提供標準的 RESTful API 接口來進行學生資料的操作。

---

## 專案架構圖

以下是本專案的架構圖，展示了前端、後端、資料庫的互動流程：

```plaintext
          +-------------------+
          |    Frontend (UI)  |
          +-------------------+
                   |
                   v
          +---------------------+        +-------------------+
          |     Express API      | <----> |    MongoDB (DB)   |
          +---------------------+        +-------------------+
                   |
                   v
          +---------------------+
          |    Business Logic   |
          +---------------------+
```
##  安裝與執行指引
1. 下載專案
首先，將專案從 GitHub 複製到您的本地機器：

bash
複製程式碼
git clone https://github.com/yourusername/StudentHub.git
cd StudentHub
2. 安裝前端依賴
進入 frontend 目錄並安裝所需的 npm 套件：

bash
複製程式碼
cd frontend
npm install
啟動前端開發伺服器：

bash
複製程式碼
npm start
前端應用將會運行在 http://localhost:3000。

3. 安裝後端依賴
進入 backend 目錄並安裝所需的 npm 套件：

bash
複製程式碼
cd backend
npm install
4. 設定 MongoDB
確保您已經安裝並啟動了 MongoDB。如果使用 MongoDB Atlas 或其他雲端資料庫，請在 .env 檔案中設定資料庫連接 URL。

bash
複製程式碼
MONGO_URI=mongodb://localhost:27017/studenthub
5. 啟動後端伺服器
在 backend 目錄啟動後端伺服器：

bash
複製程式碼
npm start
後端將會運行在 http://localhost:5000。

6. 完成
現在，您可以在瀏覽器中打開前端頁面並開始使用應用程式。
