1. is JS /nodejs single threaded? -> yes

2. how can nodejs handle multiple task at once -> event loop , node API, async architecture

3. every code that is written in js -> will run on callStack

4. if a function is asynchronous then that fn will be invoked on callStack and immediately removed

5. it will executed in your node Api,

6. callBack -> will travel through queue , event loop to callStack for execution

7. Callbacks

    *  Some problem with writing code cb ->
        * nesting -> but could easily solved by linearzing cb fn
        * inversion of control -> cb will be called by the asyn fn -> can a third party lib

8. Promises:

        * we get an object named promise -> with which we can add listeners -> then /catch
        * here we solved the problem of nesting using chaining our then
        * we solved inversion of control by using methods like then and catch -> by design
            then only call the cb fn inside them only.
        * promises will have another for it's cb -> microTask ->
        that has higher priority then your cb queue .

9. async await:

        * to make then and catch syntax
