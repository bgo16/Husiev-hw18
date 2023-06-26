class Student {
  constructor(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.grades = new Array(25);
    this.attendance = Array.from({ length: 25 });
    this.age = 2023 - this.birthday;
  }

  getAge() {
    return this.age;
  }

  getMid() {
    return (
      this.grades.reduce((acc, el) => {
        return acc + el;
      }) / this.grades.length
    );
  }

  present() {
    if (this.attendance.includes(undefined)) {
      this.attendance[this.attendance.indexOf(undefined)] = true;
    } else {
      console.log('More then 25');
    }
  }

  absent() {
    if (this.attendance.includes(undefined)) {
      this.attendance[this.attendance.indexOf(undefined)] = false;
    } else {
      console.log('More then 25');
    }
  }

  summary() {
    const mid = this.getMid();
    const midAtt =
      this.attendance.filter(Boolean).length / this.attendance.length;
    if (mid > 90 && midAtt > 0.9) {
      return 'Молодець!';
    } else if (mid > 90 || midAtt > 0.9) {
      return 'Добре, але можна краще';
    } else {
      return 'Редиска!';
    }
  }

  fill(a, b) {
    for (let i = 0; i < this.grades.length; i++) {
      this.grades[i] = Math.floor(Math.random() * 100) + a;
    }
    for (let i = 0; i < this.attendance.length - 1; i++) {
      this.attendance[i] = Math.floor(Math.random() * b) ? true : false;
    }
  }
}
