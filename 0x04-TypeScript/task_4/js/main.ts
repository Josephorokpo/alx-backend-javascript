// main.ts

// Define subjects
export const cpp = "C++";
export const java = "Java";
export const react = "React";

// Define Teacher interface
interface Teacher {
  experienceTeachingC: number;
}

// Create and export cTeacher object
export const cTeacher: Teacher = {
  experienceTeachingC: 10
};

// Define Subject class
class Subject {
  constructor(private name: string, private teacher: Teacher) {}

  getRequirements(): string {
    return `Requirements for ${this.name}: Basic knowledge of programming required.`;
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC > 5) {
      return `Teacher available for ${this.name}`;
    } else {
      return `Teacher not available for ${this.name}`;
    }
  }
}

// Create instances of Subject for each subject
const cppSubject = new Subject(cpp, cTeacher);
const javaSubject = new Subject(java, cTeacher);
const reactSubject = new Subject(react, cTeacher);

// Log information for each subject
console.log("For Cpp subject:");
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log("\nFor Java subject:");
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log("\nFor React subject:");
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
