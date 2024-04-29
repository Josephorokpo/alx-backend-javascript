const updateStudentGradeByCity = (students, city, newGrades) => {
    // Filter students by the specified city
    const filteredStudents = students.filter(student => student.location === city);

    // Map over the filtered students array to update their grades
    const updatedStudents = filteredStudents.map(student => {
        // Find the corresponding grade object for the student in newGrades array
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);

        // If gradeObj is found, update student's grade, otherwise set it to 'N/A'
        const grade = gradeObj ? gradeObj.grade : 'N/A';

        // Return updated student object
        return { ...student, grade };
    });

    return updatedStudents;
};

export default updateStudentGradeByCity;
