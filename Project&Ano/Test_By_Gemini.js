function summarizeScores(results) {
    const summary = {};

    // เริ่มเขียนลูปตรงนี้...
    results.forEach(room => {
        room.students.forEach(student => {
            const name = student.name;
            
            // 1. ถ้ายังไม่เคยเจอชื่อนี้ใน summary... ให้สร้างค่าเริ่มต้น
            if (!summary[name]) {
                summary[name] = {
                    name: name,
                    totalScore: 0,
                    subjectCount: 0
                };
            }
            // 2. บวกคะแนน (totalScore)
            summary[name].totalScore += student.score;
            // 3. บวกจำนวนวิชา (subjectCount)
            summary[name].subjectCount += 1;
        });
    });

    // 4. แปลง Object เป็น Array
    const summaryArray = Object.values(summary);
    // 5. คำนวณคะแนนเฉลี่ย (average) ของแต่ละคนก่อนเรียง
    summaryArray.forEach(student => {
        student.average = student.totalScore / student.subjectCount;
    });
    // 6. จัดเรียงตามคะแนนรวม (totalScore) จากมากไปน้อย
    summaryArray.sort((a, b) => b.totalScore - a.totalScore);

    return summaryArray;
}


const classResults = [
    {
        className: "Room A",
        students: [
            { name: "Alice", score: 85 },
            { name: "Bob", score: 50 }
        ]
    },
    {
        className: "Room B",
        students: [
            { name: "Charlie", score: 90 },
            { name: "Alice", score: 75 } // Alice ลงเรียนสองวิชา
        ]
    }
];
console.log(summarizeScores(classResults));