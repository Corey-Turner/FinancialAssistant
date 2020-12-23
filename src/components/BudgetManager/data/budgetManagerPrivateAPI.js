import {BUDGET_CATEGORY_FIELDS, EXPENSE_FIELDS, DEFAULT_VALUES} from './constants'
import uuidv4 from 'uuid/v4'


const defaultBudgetCategoryObject = {
    id: -1,
    name: DEFAULT_VALUES.NEW_CATEGORY,
    description: '',
    budgetedAmount: 0,
    incomeSource: false,
    color: DEFAULT_VALUES.DEFAULT_COLOR,
}

const defaultExpenseObject = {
    id: -1,
    name: DEFAULT_VALUES.NEW_EXPENSE,
    date: '',
    amount: 0,
    category: DEFAULT_VALUES.NO_CATEGORY
}

//  *****************************************************************************
///   <summary>
///     adds item to the Budget category list, ID is generated in this function
///   </summary>
///
///   <param name="categories">     incoming categories list        </param>
///
///   <returns>                     Updated categories list         </returns>
//  *****************************************************************************
export const addBudgetCategory = (categories) => {
    //generate uuid
    const uniqueID = uuidv4()

    //create the new object 
    let newItem = Object.assign({}, defaultBudgetCategoryObject)
    newItem.id=uniqueID;
    newItem.name=newItem.name+(categories.length + 1)

    //add new item to the output array
    const outArr = [...categories, newItem]

    //return the new array
    return outArr;
}


//  *****************************************************************************
///   <summary>
///     removes item from the Budget category list
///   </summary>
///
///   <param name="categories">     incoming categories list        </param>
///   <param name="id">             Category ID                     </param>
///
///   <returns>                     Updated categories list         </returns>
//  *****************************************************************************
export const removeBudgetCategory = (categories, id) => {
    const tempCategories = categories.filter(obj => {
        if(obj.id === id){
            return
        }
        return obj
    })

    return tempCategories
}


//  *****************************************************************************
///   <summary>
///     Sets the BudgetCategory with Specified ID to new BudgetCategoryItem
///   </summary>
///
///   <param name="categories">     incoming categories list                </param>
///   <param name="id"              Category ID                             </param>
///   <param name="field"           Category Field BUDGET_CATEGORY_FIELDS   </param>
///   <param name="value"           Nev Value for Specified Field           </param>
///
///   <returns>                     Updated expenses list                   </returns>
//  *****************************************************************************
export const updateBudgetCategory = (categories, id, field, value) => {
    const newArr = categories.map(obj => {
        if(obj.id === id){
            let newItem = Object.assign({}, obj)
            newItem[field] = value
            return newItem
        }
        return obj
    })
    return newArr;
}

//  *****************************************************************************
///   <summary>
///     Adds an item to the Expenses List, ID is generated in this function
///   </summary>
///
///   <param name="expenses">   incoming categories list            </param>
///   <param name="name">       Expense Name                        </param>
///   <param name="date">       Date the Expense was made on        </param>
///   <param name="amount">     Amount of the Expense               </param>
///   <param name="category">   CategoryID associated with Expense  </param>
///
///   <returns>                     Updated expenses list           /returns>
//  *****************************************************************************
export const addItemToExpenseList = (expenses, name, date, amount, category) => {
    //generate uuid
    const uniqueID = uuidv4()

    //create the new object 
    let newItem = Object.assign({}, defaultExpenseObject)
    if(undefined !== name){
        newItem[EXPENSE_FIELDS.Name] = name
    }
    if(undefined !== date){
        newItem[EXPENSE_FIELDS.Date] = date
    }
    if(undefined !== amount){
        newItem[EXPENSE_FIELDS.Amount] = amount
    }
    if(undefined !== category){
        newItem[EXPENSE_FIELDS.Category] = category
    }
    newItem.id=uniqueID;

    //add new item to the output array
    const outArr = [...expenses, newItem]

    //return the new array
    return outArr;
}


//  *****************************************************************************
///   <summary>
///     removes item from the Expenses List
///   </summary>
///
///   <param name="categories">     incoming expenses list        </param>
///   <param name="id">             Category ID                     </param>
///
///   <returns>                     Updated expenses list         </returns>
//  *****************************************************************************
export const removeItemFromExpenseList = (expenses, id) => {
    const tempCategories = expenses.filter(obj => {
        if(obj.id === id){
            return
        }
        return obj
    })

    return tempCategories
}


//  *****************************************************************************
///   <summary>
///     Sets the expenseItem with specified ID to new ExpenseItem
///   </summary>
///
///   <param name="expenses">       incoming Expenses list          </param>
///   <param name="id">             Expense Item ID                 </param>
///   <param name="field">          Expense Field EXPENSE_FIELD     </param>
///   <param name="value">          New Value for specified field   </param>
///
///   <returns>                     Updated Expenses list           </returns>
//  *****************************************************************************
export const updateExpenseItem   = (expenses, id, field, value) => {
    const newArr = expenses.map(obj => {
        if(obj.id === id){
            let newItem = Object.assign({}, obj)
            newItem[field] = value === undefined ? getDefaultExpenseValue(field) : value
            return newItem
        }
        return obj
    })
    return newArr;
}


//  *****************************************************************************
///   <summary>
///     Sets the category of each Expense with specified ID to "Uncategorized"
///   </summary>
///
///   <param name="expenses">       incoming Expenses list          </param>
///   <param name="idList">         List of Expense Ids             </param>
///
///   <returns>                     Updated Expenses list           </returns>
//  *****************************************************************************
export const setListOfExpensesToUncategorized    = (expenses, idList) => {
    const newArr = expenses.map(obj => {
        if(idList.find(id => id === obj.id) !== undefined){
            let newItem = Object.assign({}, obj)
            newItem[EXPENSE_FIELDS.Category] = DEFAULT_VALUES.NO_CATEGORY
            return newItem
        }
        return obj
    })
    return newArr;
}


//  *****************************************************************************
///   <summary>
///     Finds the ExpenseCategoryID associated with the Expense
///   </summary>
///
///   <param name="expenses">       List of expenses        </param>
///   <param name="ID">             ExpenseId               </param>
///
///   <returns>               Category ID                   </returns>
//  *****************************************************************************
export const RetrieveExpenseCategoryIDFromExpense = (expenses, id) => {
    let outVal = -1;
    expenses.map(val => {
        if(val.id === id){
            outVal = val.category
            return;
        }
    })
    return outVal;
}


//  *****************************************************************************
///   <summary>
///     Finds the index of an object with the associated ID
///   </summary>
///
///   <param name="list">       List of objects with ID field        </param>
///   <param name="ID">         Id                                   </param>
///
///   <returns>               Index of object with ID                </returns>
//  *****************************************************************************
export const RetrieveIndexFromListOfItems = (list, id) => {
    let outVal = -1;
    list.map((val, index) => {
        if(val.id === id){
            outVal= index;
            return
        }
    });
    return outVal;
}


const getDefaultExpenseValue = (field, ExpensesCount) => {
    switch(field){
        case EXPENSE_FIELDS.Name:
            return DEFAULT_VALUES.NEW_EXPENSE;
        case EXPENSE_FIELDS.Date:
            return '';
        case EXPENSE_FIELDS.Amount:
            return 0;
        case EXPENSE_FIELDS.Category:
            return DEFAULT_VALUES.NO_CATEGORY
        default:
            return ''
    }
}