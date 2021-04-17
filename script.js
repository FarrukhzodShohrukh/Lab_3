function Max()
{
    var A = Number(document.form1.a.value)
    var B = Number(document.form1.b.value)
    var max = eval(Math.max(a,b))
    var print = Number(document.form1.print.value)
    if(a!=0 && b!=0)
    {
    print = eval(max);
    }
    document.form1.print.value=print;
}