package main

import "fmt"

type student struct{
	Name string
	Rgno float64
	Dept string
}


func main() {
	// message := greetMe("world")
    // fmt.Println(message)
	// n1:=2
	// n2:=3
	// sum:=n1+n2
	// fmt.Println(sum)
	// ifelseDemo()
	// forThreeVarDemo()
	// forCondiDemo()
	// forPythonStyle()
	st := student{Name:"Student1",Rgno:12.3 , Dept: "CSE"}
	fmt.Println("Name: ",st.Name,"\nRegistration no: ", st.Rgno,"\nDepartment: ", st.Dept)
  }

//   func ifelseDemo() {
// 	var age int
// 	fmt.Scanln(&age)
// 	if age > 18{
// 		fmt.Println("Adult")
// 	} else {
// 		fmt.Println("Minor")
// 	}
//   }

//   func forThreeVarDemo() {
// 	sum := 0
// 	for i:= 1; i < 5; i++{
// 		sum += i
// 	}
// 	fmt.Println(sum)
//   }

//   func forCondiDemo() {
// 	n :=1
// 	for n < 5 {
// 		n*=2
// 	}
// 	fmt.Println(n)
//   }
//   func forPythonStyle() {
// 	strings := []string{"hello","world", "Golang", "NIE"}
// 	for _, s :=range strings {
// 		fmt.Println(s)
// 	}
//   }