function getvalue(num)
{
    console.log(num)
    document.getElementById("result").value+=num
}
function resultt()
{
    var result=document.getElementById('result').value
    console.log(result)
}
function clearresult()
{
    document.getElementById("result").value=''
}
function getresult()
{
 document.getElementById("result").value= eval(document.getElementById("result").value)
}