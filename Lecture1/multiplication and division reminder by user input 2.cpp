#include<iostream>
#include<conio.h>
using namespace std;
int main()
{
	int num1,num2;
	cout<<"please enter 2 numbers :";
	cin>>num1>>num2;
	double division=(float) num1/num2;
	cout<<"division is :"<<division<<endl;
	int multiplication = num1*num2;
	cout<<"multiplication is :"<<multiplication<<endl;
	int reminder = num1%num2;
	cout<<"Reminder is :"<<reminder<<endl;
	getch();
}
