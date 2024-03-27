const btn = document.querySelector('button');
const inp = document.querySelector('input');

btn.addEventListener('click',async (ev)=>{
    // Yeh html ke default behaviour ko hone se rokk deta hai
    ev.preventDefault();

    // Yaha se hum ajax request bhej skte hai
    try{
        let {data} = await axios.get(`/gettask?task=${inp.value}`)
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
})