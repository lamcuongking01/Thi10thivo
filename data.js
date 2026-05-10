const appData = {
    // ================= MÔN TOÁN =================
    math: {
        formulaLink: "https://drive.google.com/drive/folders/1kfSe90DjMvKGtRud8etE60e1ajWO81xf", // Link công thức
        tests: [
            {
                title: "Đề thi thử Toán - Tỉnh Bắc Giang (Có Tự Luận)",
                hasEssay: true, // true là mở chức năng nộp ảnh chụp bài làm
                questions: [
                    { 
                        q: "Căn bậc hai số học của 16 là:", 
                        a: "4", b: "-4", c: "±4", d: "256", 
                        correct: "A", 
                        explain: "Căn bậc hai số học của một số dương luôn là số dương. Vì 4² = 16 nên đáp án là 4." 
                    },
                    { 
                        q: "Hàm số y = (m-1)x + 3 đồng biến khi:", 
                        a: "m > 1", b: "m < 1", c: "m = 1", d: "m ≠ 1", 
                        correct: "A", 
                        explain: "Hàm số bậc nhất y = ax + b đồng biến khi hệ số a > 0. Suy ra m - 1 > 0 hay m > 1." 
                    }
                ]
            }
        ]
    },

    // ================= MÔN VĂN =================
    lit: {
        formulaLink: "https://drive.google.com/drive/folders/1Yo1q6cvwmsGbzyFRGluOJrG6Nk3p_Zwi",
        tests: [
            {
                title: "Trắc nghiệm Tác phẩm Truyện Kiều",
                hasEssay: false,
                questions: [
                    { 
                        q: "Cụm từ 'Làn thu thủy' trong Truyện Kiều miêu tả vẻ đẹp gì của Thúy Kiều?", 
                        a: "Làn da trắng", b: "Mái tóc mây", c: "Đôi mắt trong như nước mùa thu", d: "Nét ngài nở nang", 
                        correct: "C", 
                        explain: "'Thu thủy' là nước mùa thu. Nguyễn Du dùng hình ảnh này để ẩn dụ cho đôi mắt trong trẻo, sâu thẳm của Kiều." 
                    }
                ]
            }
        ]
    },

    // ================= MÔN ANH =================
    eng: {
        formulaLink: "https://drive.google.com/drive/folders/1rhY-gyyKZj1Am0knK1Fz1x3X9zh4pc9x",
        tests: [
            {
                title: "Đề Test Ngữ Pháp Cơ Bản",
                hasEssay: false,
                questions: [
                    { 
                        q: "She usually ______ up early in the morning.", 
                        a: "get", b: "gets", c: "getting", d: "got", 
                        correct: "B", 
                        explain: "Có trạng từ 'usually' chỉ thói quen hiện tại -> Hiện tại đơn. Chủ ngữ 'She' ngôi thứ 3 số ít nên thêm 's'." 
                    }
                ]
            }
        ]
    }
};
