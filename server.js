const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// تشغيل الملفات الثابتة من مجلد "public"
app.use(express.static(path.join(__dirname, "public")));

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// إرسال الطلب
app.post("/order", (req, res) => {
    console.log("طلب جديد:", req.body);
    res.json({ message: "تم استلام الطلب بنجاح!", data: req.body });
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});