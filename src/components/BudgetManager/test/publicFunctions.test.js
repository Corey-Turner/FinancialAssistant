import { DEFAULT_VALUES, BUDGET_CATEGORY_FIELDS, EXPENSE_FIELDS } from "../data/constants"
import {CreateCategory, RemoveCategory, ModifyCategoryField, CreateExpense, RemoveExpense, ModifyExpenseField} from './../data/budgetManagerPublicAPI'

const STARTING_OBJECT = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
}

const checkIfBudgetObjectsAreEqual = (a, b) => {
    checkList(a.categories, b.categories)
    checkList(a.expenses, b.expenses)
    expect(1).toEqual(1)
}

const checkList = (a,b) => {
    expect(a.length).toEqual(b.length)
    a.map((item, index) => {
        for(const [key] of Object.entries(item)) {
            if('id' === key) {
                continue;
            }
            expect(a[index][key]).toEqual(b[index][key]);
        }
    })
}

//  ***********************************
///
///     CreateCategory
///
//  ***********************************
test("Should Successfully Create a new Category", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "111111111",
            name: "NewCategory 5",
            description: "",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
    }

    const result = CreateCategory(STARTING_OBJECT)
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

//  ***********************************
///
///     RemoveCategory
///
//  ***********************************
test("Should successfully remove a category with given ID - Index 0", () => {
    const expectedResult = {
    categories : [
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
    }

    const result = RemoveCategory(STARTING_OBJECT, "123456789")
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("Should successfully remove a category with given ID - Middle index", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
    }

    const result = RemoveCategory(STARTING_OBJECT, "234567891")
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("Should successfully remove a category with given ID - Last Index", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: DEFAULT_VALUES.NO_CATEGORY,
        }
    ]
    }

    const result = RemoveCategory(STARTING_OBJECT, "456789123")
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("No Category should be removed when the ID is invalid", () => {
    const result = RemoveCategory(STARTING_OBJECT, "987654321")
    checkIfBudgetObjectsAreEqual(result, STARTING_OBJECT)
})
//  ***********************************
///
///     ModifyCategoryField
///
//  ***********************************
test("Should update the Name Field on a Category Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Modified Name",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyCategoryField(STARTING_OBJECT, "345678912", BUDGET_CATEGORY_FIELDS.Name,"Modified Name")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Description Field on a Category Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Modified Description",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyCategoryField(STARTING_OBJECT, "345678912", BUDGET_CATEGORY_FIELDS.Description,"Modified Description")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Budgeted Amount Field on a Category Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 1234.56,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyCategoryField(STARTING_OBJECT, "345678912", BUDGET_CATEGORY_FIELDS.BudgetedAmount, 1234.56)
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Income Source Field on a Category Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: true,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyCategoryField(STARTING_OBJECT, "345678912", BUDGET_CATEGORY_FIELDS.IncomeSource, true)
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Color Field on a Category Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#123456"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyCategoryField(STARTING_OBJECT, "345678912", BUDGET_CATEGORY_FIELDS.Color,"#123456")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

//  ***********************************
///
///     CreateExpense
///
//  ***********************************
test("Should Successfully Create a new Expense When given all fields", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        },
        {
            id: "111111111",
            name: "Created Expense",
            date: "01/11/2021",
            amount: 95.69,
            category: "234567891",
        }
    ]
    }

    const result = CreateExpense(STARTING_OBJECT, 'Created Expense', '01/11/2021', 95.69, '234567891')
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should Successfully Create a new Expense with Default Data", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        },
        {
            id: "111111111",
            name: "NewExpense ",
            date: "",
            amount: 0,
            category: DEFAULT_VALUES.NO_CATEGORY,
        }
    ]
    }

    const result = CreateExpense(STARTING_OBJECT, undefined, undefined, undefined, undefined)
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})
//  ***********************************
///
///     RemoveExpense
///
//  ***********************************
test("Should successfully remove an expense with given ID - Index 0", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
    }

    const result = RemoveExpense(STARTING_OBJECT, '987654321')
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("Should successfully remove an expense with given ID - Middle index", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        },
        {
            id: "198765432",
            name: "Expense 9",
            date: "07/21/2020",
            amount: 194.21,
            category: "456789123",
        }
    ]
    }

    const result = RemoveExpense(STARTING_OBJECT, '765432198')
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("Should successfully remove an expense with given ID - Last Index", () => {
    const expectedResult = {
    categories : [
        {
            id: "123456789",
            name: "Category 1",
            description: "Description 1",
            budgetedAmount: 0,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "234567891",
            name: "Category 2",
            description: "Description 2",
            budgetedAmount: 150.25,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "345678912",
            name: "Category 3",
            description: "Description 3",
            budgetedAmount: 650.27,
            incomeSource: false,
            color: "#808080"
        },
        {
            id: "456789123",
            name: "Category 4",
            description: "Description 4",
            budgetedAmount: 12465.45,
            incomeSource: false,
            color: "#808080"
        }
    ],
    expenses: [
        {
            id: "987654321",
            name: "Expense 1",
            date: "12/21/2020",
            amount: 10.25,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "876543219",
            name: "Expense 2",
            date: "12/21/2021",
            amount: 15.24,
            category: DEFAULT_VALUES.NO_CATEGORY,
        },
        {
            id: "765432198",
            name: "Expense 3",
            date: "01/21/2020",
            amount: 18.95,
            category: "123456789",
        },
        {
            id: "654321987",
            name: "Expense 4",
            date: "02/21/2020",
            amount: 88.25,
            category: "123456789",
        },
        {
            id: "543219876",
            name: "Expense 5",
            date: "03/21/2020",
            amount: 74.13,
            category: "345678912",
        },
        {
            id: "432198765",
            name: "Expense 6",
            date: "04/21/2020",
            amount: 20.14,
            category: "345678912",
        },
        {
            id: "321987654",
            name: "Expense 7",
            date: "05/21/2020",
            amount: 0.05,
            category: "456789123",
        },
        {
            id: "219876543",
            name: "Expense 8",
            date: "06/21/2020",
            amount: 20.34,
            category: "456789123",
        }
    ]
    }

    const result = RemoveExpense(STARTING_OBJECT, '198765432')
    checkIfBudgetObjectsAreEqual(result, expectedResult)

})

test("No expense should be removed when the ID is invalid", () => {

    const result = RemoveExpense(STARTING_OBJECT, '111111111')
    checkIfBudgetObjectsAreEqual(result, STARTING_OBJECT)
})
//  ***********************************
///
///     ModifyExpenseField
///
//  ***********************************
test("Should update the Name Field on a Expense Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Modified Name",
                date: "02/21/2020",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }

    const result = ModifyExpenseField(STARTING_OBJECT, '654321987', EXPENSE_FIELDS.Name, "Modified Name")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Date Field on a Expense Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "09/14/2021",
                amount: 88.25,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }
    
    const result = ModifyExpenseField(STARTING_OBJECT, '654321987', EXPENSE_FIELDS.Date, "09/14/2021")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Amount Field on a Expense Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 65.49,
                category: "123456789",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }
    
    const result = ModifyExpenseField(STARTING_OBJECT, '654321987', EXPENSE_FIELDS.Amount, 65.49)
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})

test("Should update the Category Field on a Expense Object", () => {
    const expectedResult = {
        categories : [
            {
                id: "123456789",
                name: "Category 1",
                description: "Description 1",
                budgetedAmount: 0,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "234567891",
                name: "Category 2",
                description: "Description 2",
                budgetedAmount: 150.25,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "345678912",
                name: "Category 3",
                description: "Description 3",
                budgetedAmount: 650.27,
                incomeSource: false,
                color: "#808080"
            },
            {
                id: "456789123",
                name: "Category 4",
                description: "Description 4",
                budgetedAmount: 12465.45,
                incomeSource: false,
                color: "#808080"
            }
        ],
        expenses: [
            {
                id: "987654321",
                name: "Expense 1",
                date: "12/21/2020",
                amount: 10.25,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "876543219",
                name: "Expense 2",
                date: "12/21/2021",
                amount: 15.24,
                category: DEFAULT_VALUES.NO_CATEGORY,
            },
            {
                id: "765432198",
                name: "Expense 3",
                date: "01/21/2020",
                amount: 18.95,
                category: "123456789",
            },
            {
                id: "654321987",
                name: "Expense 4",
                date: "02/21/2020",
                amount: 88.25,
                category: "234567891",
            },
            {
                id: "543219876",
                name: "Expense 5",
                date: "03/21/2020",
                amount: 74.13,
                category: "345678912",
            },
            {
                id: "432198765",
                name: "Expense 6",
                date: "04/21/2020",
                amount: 20.14,
                category: "345678912",
            },
            {
                id: "321987654",
                name: "Expense 7",
                date: "05/21/2020",
                amount: 0.05,
                category: "456789123",
            },
            {
                id: "219876543",
                name: "Expense 8",
                date: "06/21/2020",
                amount: 20.34,
                category: "456789123",
            },
            {
                id: "198765432",
                name: "Expense 9",
                date: "07/21/2020",
                amount: 194.21,
                category: "456789123",
            }
        ]
    }
    
    const result = ModifyExpenseField(STARTING_OBJECT, '654321987', EXPENSE_FIELDS.Category, "234567891")
    checkIfBudgetObjectsAreEqual(result, expectedResult)
})