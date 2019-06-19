/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",  


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        任意类型（any）
        null 和 undefined
        void类型
        never类型

*/


//布尔类型（boolean）

    /*
    es5的写法 （正确写法）  ts中（错误写法）
        var flag=true;
        
        flag=456;
    */

 

    /*
     typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验

     写ts代码必须指定类型



    var flag:boolean=true;

    // flag=123;  //错误

    flag=false;  //正确

    console.log(flag);


    */



// 数字类型（number）


    /*
        var num:number=123;

        num=456;

        console.log(num);  /正确/


        num='str';    //错误
        
        */


// 字符串类型(string)


   /*
        var str:string='this is ts';

        str='haha';  //正确


        str=true;  //错误

   */
    


// 数组类型（array）  ts中定义数组有两种方式

    // var arr=['1','2'];  //es5定义数组


    // 1.第一种定义数组的方式

    
     /*
        var arr:number[]=[11,22,33];

        console.log(arr);
     */
    

    //2.第二种定义数组的方式

      /*
      
        var arr:Array<number>=[11,22,33];

        console.log(arr)
        
    */

    //3、第三种
    var arr3:any[]=['123',22,true];

    console.log(arr3);



// 元组类型（tuple）  属于数组的一种


    // var arr:Array<number>=[11,22,33];

    // console.log(arr)


    //元祖类型
    // let arr:[number,string]=[123,'this is ts'];

    // console.log(arr);



    

/*



枚举类型（enum）
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。  
    在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        
            enum 枚举名{ 
                标识符[=整型常数], 
                标识符[=整型常数], 
                ... 
                标识符[=整型常数], 
            } ;     

 */

            /*

                enum Flag {success=1,error=2};


                let s:Flag=Flag.success;

                console.log(s);



                enum Flag {success=1,error=2};


                    let f:Flag=Flag.error;

                    console.log(f);
            */

    

            /*
            000010

            -1

            -2


            */



        //    enum Color {blue,red,'orange'};


        //    var c:Color=Color.red;

        //    console.log(c);   //1  如果标识符没有赋值 它的值就是下标








        // enum Color {blue,red=3,'orange'};


        // // var c:Color=Color.red;

        // // console.log(c);   //3

        // var c:Color=Color.orange;
        // console.log(c);   //4





       /* 
            enum Err {'undefined'=-1,'null'=-2,'success'=1};


            var e:Err=Err.success;
    
            console.log(e); 
        
        */
   
   
   
        
   
   
   // 任意类型（any）
   
   // var num:any=123;


  // num='str';

  // num=true;

  // console.log(num);


  // 任意类型的用处
            /* 
                var obox:any=document.getElementById('box');

                obox.style.color='red'; 
            
            */

   
   
   // null 和 undefined  其他（never类型）数据类型的子类型
   
    // var num:number;
    // console.log(num); //输出 underfined 报错

    // var num:underfined;
    // console.log(num); //输出 underfined 正确

    /* 
        var num:number|undefined;

        num=123;
        
        console.log(num); 
        
    */
   
   
   // void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
   
   /* es5中的写法
    function run(){
        console.log("123");
    }
    run()
   */
    /* 表示方法没有返回任何类型
        function run():void{
            console.log('run');
        }
        run();
    */

    /*  错误写法  
        function run():void{
                console.log('run');
            }
        run();

    */
         
    /* 正确写法
        function run():number{
            return 123;
        }
        run();
    */

    

   // never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
   // 这意味着声明never的变量只能被never类型所赋值。

   /*
        var a:undefined;

        a=undefined;

        var b:null;

        b=null;
   */
   
    /* 
        var a:never;

        //a=123;   //错误的写法

        a=(()=>{
            throw new Error('错误');
        })();
    */


/*
    3、 typeScript中的函数

        3.1、函数的定义
        3.2、可选参数
        3.3、默认参数
        3.4、剩余参数
        3.5、函数重载
        3.6、箭头函数   es6


*/


   //3.1、函数的定义

    /* es5 定义函数的方法
        //函数声明法
            function run(){
                return 'run';
            }

        //匿名函数
           var run2 = function(){
                return 'run2';
            }
    */

    //ts中定义函数的方法

    //函数声明法
          /*   function runs():string{
                return 'run';
            }
            //错误写法
            function run():string{
                return 123;
            } */

    //匿名函数

            /* 
                var fun2=function():number{
                    return 123;
                }

                alert(fun2());//调用方法
             */

    //ts中定义方法传参

                /* 
                    function getInfo(name:string,age:number):string{
                        return `${name} ---${age}`;
                    }

                    alert(getInfo('张三',20));
                 */

                 /* 
                    var getInfo=function(name:string,age:number):string{
                        return `${name} ---${age}`;
                    }

                    alert(getInfo('张三',20));
                  */

    // 没有返回值得方法

                   /* 
                        function run():void{
                            console.log()
                        }

                        run();
                     */



   //3.2、方法可选参数

        //es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数

        /* 
            function getInfo(name:string,age?:number):string{
                if(age){
                    return `${name} ---${age}`;
                }else{
                    return `${name} ---年龄保密`;
                }
            }

            alert(getInfo('zhangsan'));

            alert(getInfo('zhangsan',123));
         */

         //注意：可选参数必须配置到参数的最后面
                /* 错误写法
                    function getInfo(name?:string,age:number):string{
                        if(age){
                            return `${name} ---${age}`;
                        }else{
                            return `${name} ---年龄保密`;
                        }
                    }

                    alert(getInfo('zhangsan')); 
                */
       

   //3.3、默认参数

        //es5里面没法设置默认参数，es6和ts中都可以设置默认参数
            /* 
                function getInfo(name:string,age:number=20):string{

                    if(age){

                        return `${name} ---${age}`;
                    }else{

                        return `${name} ---年龄保密`;
                    }
                }

                alert(getInfo('zhangsan')); 

                alert(getInfo('zhangsan',30)); 

            */


   //3.4、剩余参数

        /* 
            function sum(a:number,b:number,c:number,d:number):number{
                return a+b+c+d;
            }

            alert(sum(1,2,3,4));
        */
        
    
        //三点运算符  接收新参传过来的值

        /* 
            function sum(...result:number[]):number{
                var sum=0;

                for (let index = 0; index < result.length; index++) {
                    sum+=result[index];
                }

                return sum;
            }

            alert(sum(1,2,3,4,5,6));
         */

        /* 
            function sum(a:number,b:number,...result:number[]):number{
                var sum=a+b;

                for (let index = 0; index < result.length; index++) {
                    sum+=result[index];
                }

                return sum;
            }

            alert(sum(1,2,3,4,5,6)); 
        */




   //3.5、ts函数重载

        // java中方法的重载：重载指的是两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况。

        // typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。

        //ts为了兼容es5 以及es6 重载的写法和Java中有区别

        /* es5中出现同名方法，下面的会替换上面的方法
        function name(config:any):any {
            
        }

        function name(config:any,value:any){

        } 
        
        */

        //ts 中的重载

        /* 
            function getInfo(name:string):string;

            function getInfo(age:number):number;

            function getInfo(str:any):any{

                if(typeof str==="string"){
                    return '我叫：'+str;
                }else{
                    return '我的年龄是'+str;
                }
            } 
        */

        // alert(getInfo('张三')); //正确

        // alert(getInfo(20)) //正确

        // alert(getInfo(true)); //错误

        
        /* 
        
            function getInfo(name:string):string;

            function getInfo(name:string,age:number):string;

            function getInfo(name:any,age?:any):any{
                if(age){
                    return '我叫'+name+"我的年龄是"+age;
                }else{
                    return '我叫'+name;
                }
            }
        
        */
        // alert(getInfo('zhangsan'))  //正确
        // alert(getInfo(1234))    //错误
        // alert(getInfo('zhangsan',29))    //正确

   //3.6、箭头函数   es6

        //this 指向的问题   箭头函数里面的this指向上下文

       /* es5中的写法
            setTimeout(function () {
                alert('run');
            },1000);
        */

        /*
            setTimeout( ()=> {
                    alert('run');
                },1000);
        */








/* 
    typeScript 中的类

        4.1 类的定义
        4.2 继承
        4.3 类里面的修饰符
        4.4 静态属性 静态方法
        4.5 抽象类 继承 多态
*/





    // 1、ts中类的定义

    /* es5：
        function Person(name){
            this.name=name;
            this.run=function(){

                console.log(this.name);
            }
        }


        var p=new Person("张三");

        p.run();
    */


    /* ts中定义类：
        class Person{
            name:string;    //定义属性  前面省略了public关键词

            constructor(n:string){  //构造函数  实例化类的时候触发的方法
                this.name=n;
            }

            run():void{
                alert(this.name);
            }
        }

        var p=new Person('张三');

        p.run();
     */

    /* ts中定义类
    
    class Person{
        name:string;  
        constructor(name:string){  //构造函数  实例化类的时候触发的方法
            this.name=name;
        }

        getName():string{
            return this.name;
        }

        setName(name:string):void{
            this.name=name;
        }
    }

    var p=new Person('张三');

    alert(p.getName());

    p.setName('李四');

    alert(p.getName());
    
    */


// 2、ts中实现继承 extends、 super

    /* 
    
        class Person{
            name:string;
            constructor(name:string){
                this.name=name;
            }

            run():string{
                return `${this.name}在运动`
            }
        }


        // var p=new Person('王五');

        // alert(p.run());

        class Web extends Person{

            constructor(name:string){
                super(name);    //初始化父类的构造函数
            }

        }
        var w=new Web('李四');

        alert(w.run());
    
    */


// ts中继承的探讨   父类的方法和子类的方法一致 优先执行子类的方法， （当子类不存在此方法时才去父类查询执行这个方法）

    /*
    
        class Person{
            name:string;
            constructor(name:string){
                this.name=name;
            }

            run():string{
                return `${this.name}在运动`
            }
        }


        // var p=new Person('王五');

        // alert(p.run());

        class Web extends Person{

            constructor(name:string){
                super(name);    //初始化父类的构造函数
            }

            run():string{
                return `${this.name}在运动---子类`
            }
            work(){
                alert(`${this.name}在工作`)
            }

        }
        var w=new Web('李四');

        alert(w.run());
        w.work();
    
    */

// 3、类里面的修饰符    typescript 里面定义属性的时候给我们提供了 三种修饰符

/* 
    public  公用    在当前类里面 子类 类外面都可以访问
    protected   保护类型    在当前类里面、子类里面可以访问，在类外面没法访问
    provate  私有   在当前类里面可以访问、 在子类和类外部都没法访问。

    属性如果不加修饰符 默认就是公有（public）
*/


   /* public  公用
   
        class Person{
            public name:string;  //公有属性

                constructor(name:string){
                    this.name=name;
                }

                run():string{
                    return `${this.name}在运动`
                }
        }
        class Web extends Person{

                constructor(name:string){
                    super(name);    //初始化父类的构造函数
                }

                run():string{
                    return `${this.name}在运动---子类`
                }
                work(){
                    alert(`${this.name}在工作`)
                }

        }
        var w=new Web('李四');
            
        w.work(); 
    
    */

    // 类外部访问公有属性
    
    /* 
    
        class Person{
            public name:string;  //公有属性

                constructor(name:string){
                    this.name=name;
                }

                run():string{
                    return `${this.name}在运动`
                }
        }
        var p=new Person('哈哈哈');

        alert(p.name);
    
    */

// protected   保护类型    在类里面、子类里面可以访问，在类外面没法访问


    /* protected   保护类型 类里面访问
            class Person{
                protected name:string;  //公有属性

                    constructor(name:string){
                        this.name=name;
                    }

                    run():string{
                        return `${this.name}在运动`
                    }
            }
            class Web extends Person{

                    constructor(name:string){
                        super(name);    //初始化父类的构造函数
                    }
                    work(){
                        alert(`${this.name}在工作`)
                    }
            }
            var w=new Web('李四1001');
                
            //w.work(); 

            alert( w.run()); 
   */

// 类外部没法访问保护类型的属性
    
    /* 
    
        class Person{
            protected name:string;  //保护类型

                constructor(name:string){
                    this.name=name;
                }

                run():string{
                    return `${this.name}在运动`
                }
        }
        var p=new Person('哈哈哈');

        alert(p.name); 
    
    */

// provate  私有   在类里面可以访问、 在子类和类外部都没法访问。

    /* 
        class Person{
            private name:string;  //保护类型

                constructor(name:string){
                    this.name=name;
                }

                run():string{
                    return `${this.name}在运动`
                }
        }
            
        class web extends Person{
            constructor (name:string){
                super(name)
            }

            work(){
                console.log(`${this.name}在工作`);
            }
        } 
    */

   /*
   
        class Person{
            private name:string;  //保护类型

            constructor(name:string){
                this.name=name;
            }

            run():string{
                return `${this.name}在运动`
            }
        }

        var p =new Person('战士');

        alert(p.run());
    
    */

//4、 静态属性 静态方法 

    /* 
    
        function Person (){ //实例
            this.run1=function{

            }
        }

        Person.name="哈哈"  //静态属性
        Person.run=function(){  //静态方法

        }

        var p=new Person();

        Person.run();   // 静态方法的调用
    
    */

    /* 

        function $(element){
            return new Base(Element)
        }

        $.get=function(){

        }

        function Base(element){
            this.element='获取dom节点';

            this.css=function(arr,value){
                this.element.style.arr=value;
            }
        }

        $('#box').css('color','red');

        $.get('url',function(){

        })

    */

    /*
    
        class Person{
            public name:string;
            public age:Number=20;
            //静态属性
            static sex='男'
            constructor(name:string){
                this.name=name;
            }

            run(){  //实例方法
                alert( `${this.name}在运动`);
            }

            work(){ 
                alert(`${this.name}在工作`)
            }

            static print(){ //静态方法 没法直接调用类里面的属性
                alert('print方法'+this.sex);
            }
        }

        var p=new Person('张三');

        // p.run();

        // Person.print();

        alert(Person.sex);
    
    */


// 多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现

// 多态也是继承的一种表现 多态属性继承

    /* 
    
        class Animal{
            name:string
            constructor(name:string){
                this.name=name;
            }
            eat(){  //具体吃什么 不知道     具体吃什么？让继承它的子类去实现，每个子类的表现不一样 即为多态
                console.log('吃的方法');
            }
        }


        class Dog extends Animal{
            constructor(name:string){
                super(name)
            }

            eat(){
                return this.name+'吃粮食';
            }
        }

        class Cat extends Animal{
            constructor(name:string){
                super(name)
            }
            eat(){
                return this.name+'吃老鼠';
            }
        } 
    
    */


// typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不能包含具体实现，只能在派生类中实现

// abstract抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准 标准: Animal 这个类要求它的子类必须包含eat方法
// 标准
    /* 
    
        abstract class Animal{
            public name:string;
            constructor(name:string){
                this.name=name
            }
            abstract eat():any; // 抽象方法不能包含具体实现并且必须在派生类中实现
        }

        // var a=new Animal()  //错误写法

        class Dog extends Animal{
            // 抽象类的子类必须实现抽象类里面的抽象方法
            constructor(name:string){
                super(name);
            }
            eat(){
                console.log(this.name+'吃粮食');
            }
        }

        var d=new Dog('小黑');

        d.eat();

        class Cat extends Animal{
            // 抽象类的子类必须实现抽象类里面的抽象方法
            constructor(name:string){
                super(name);
            }

            eat(){
                console.log(this.name+'老鼠');
            }

            run(){
                console.log('其他方法可以不实现，抽象方法必须实现')
            }
            
        }

        var d1=new Cat('消化');

        d1.eat()
    
    */


/* 

    typescript中的接口

        5.1 属性类接口
        5.2 函数类型接口
        5.3 可索引接口
        5.4 类类型接口
        5.5 接口扩展
*/


/* 
    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用。
    接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据,也不关心这些类里面方法的实现细节，它只规定这批类里面必须提供某些方法，
    提供这些方法的类就可以满足实际需要。typescript中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

    定义标准。

*/

// 1、属性接口  对json的约束

    /* ts中定义方法
   
        function printLabel():void{
            console.log('printLabel');
        }

        printLabel();
    
    */

    /*  ts中定义方法传入参数
    
        function printLabel(label:string):void{
            console.log('printLabel');
        }

        printLabel('aaa')
    
    */

    /* 
        ts中自定义方法传入参数  对json进行约束
    */

    /* 
   
        function printLabel(labelInfo:{label:string}):void{
            console.log('printLabel');
        }
        // printLabel('aaa')   //错误写法

        // printLabel({name:'张三'})   // 错误写法

        printLabel({label:'张三'})  // 正确写法
    
    */


    /* 
        对批量方法传入参数进行约束

        接口：行为和动作的规范，对批量方法进行约束

    */
    
    /* 就是传入对象的约束   属性接口
    
        interface FullName{

            firstName:string;   //注意；(分号)结束
            secondName:string;


        }

        function printName(name:FullName){
            // 必须传入对象 firstName secondName

            console.log(name.firstName+'----'+name.secondName);
        }

        // printName('123');    // 错误

        printName({firstName:'李',secondName:'四'});    //只能存在接口定义了的属性,扩展属性会报错

        //  兼容扩展属性写法
        var obj={   // 传入的参数必须包含 firstName secondName
            age:20,
            firstName:'张',
            secondName:'三'
        }
        printName(obj); 
    
    */


   /* 接口：行为和动作的规范 对批量方法进行约束
   
   interface FullName{
        firstName:string;   //注意；(分号)结束
        secondName:string;
    }

    function printName(name:FullName){
        // 必须传入对象 firstName secondName
        console.log(name.firstName+'----'+name.secondName);
    }

    function printInfo(info:FullName){
        // 必须传入对象 firstName secondName
        console.log(info.firstName+info.secondName);
    }
    var obj={   // 传入的参数必须包含 firstName secondName
        age:20,
        firstName:'张',
        secondName:'三'
    }
    printName(obj); 

    var obj={   // 传入的参数必须包含 firstName secondName
        age:20,
        firstName:'张',
        secondName:'三'
    }
    printInfo(obj); 
    
    */





// 接口：可选属性


    /*
    
        interface FullName{
            firstName:string;
            secondName:string;
        }

        function getName(name:FullName){
            console.log(name);
        }

        // 参数的顺序可以不一样
        getName({secondName:'secondName',firstName:'firstName'})
    
    */

   /* 可选属性
        interface FullName{
            firstName:string;
            secondName?:string;
        }

        function getName(name:FullName){
            console.log(name);
        }
        
        getName({firstName:'firstName'}) 
    
    */ 
