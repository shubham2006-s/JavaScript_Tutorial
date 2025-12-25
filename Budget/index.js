const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const incomeTotalEl = document.getElementById("incomeTotal");
const expenseTotalEl = document.getElementById("expenseTotal");
const availableEl = document.getElementById("available");
const expensePercentEl = document.getElementById("expensePercent");

let items = [];
function removeItem(i){ items.splice(i,1); render(); }

function format(num){
  const sign = num < 0 ? "-" : "+";
  return sign + Math.abs(num).toLocaleString(undefined,{minimumFractionDigits:2});
}

function render(){
  incomeList.innerHTML = "";
  expenseList.innerHTML = "";

  let income = 0;
  let expense = 0;

  items.forEach((item,index)=>{
    const row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <div class="meta">
        <span class="dot" style="background:${item.type==='income'? '#10b981' : '#ef4444'}"></span>
        <div class="desc">${item.desc}</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="val">${format(item.amount)}</div>
        <button onclick="removeItem(${index})" style="background:none;border:none;color:#ccc;font-size:20px;cursor:pointer;">×</button>
      </div>
    `;

    if(item.type === 'income'){
      incomeList.appendChild(row);
      income += item.amount;
    }else{
      expenseList.appendChild(row);
      expense += item.amount;
    }
  });

  incomeTotalEl.textContent = format(income);
  expenseTotalEl.textContent = format(-expense);

  const available = income - expense;
  availableEl.textContent = format(available);

  let percent = income ? Math.round((expense / income) * 100) : 0;
  expensePercentEl.textContent = percent + "%";
if(percent <= 0){ expensePercentEl.textContent = "0%"; }
}

// ADD BUTTON
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",()=>{
  const type = document.getElementById("type").value;
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if(!desc || isNaN(amount) || amount <= 0){
    alert("Enter valid description and amount.");
    return;
  }

  items.unshift({type,desc,amount});

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";

  render();
});

render();
