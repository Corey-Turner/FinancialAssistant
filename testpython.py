import sys
FED_TAXES = {
    'Rate': [10,12,22,24,32,35,37],
    'S': {
        "Bracket" : [0, 9876 , 40126 , 85526, 163301, 207351, 518401],
        "Witholding" : 12200
    },
    'HOH':{
        "Bracket" : [0, 14101  , 53701  , 85501 , 163301, 207351, 518401],
        "Witholding" : 18350
    },
    'MFJ':{
        "Bracket" : [0, 19751 , 80251  , 171051, 326601, 414701 , 622051],
        "Witholding" : 24400
    },
    'MFS': {
        "Bracket" : [0, 9876 , 40126 , 85526, 163301, 207351, 311026 ],
        "Witholding" : 12200
    }
}

def parseArgs(args):

    def isNum(s):
        try:
            float(s)
            return True
        except ValueError:
            print("Is Not a number")
            return False

    out = True
    if len(args) < 4:
        print("Arguments 1 and 2 must be numbers")
        print("Argument 3 must be one of the following:\nS\nHOH\nMFJ\nMFS")
        return False

    if not isNum(args[1]):
        print("Argument 1 must be a number")
        out = False

    if not isNum(args[2]):
        print("Argument 2 must be a number")
        out = False

    if not (args[3] in FED_TAXES):
        print("Argument 3 must be one of the following:\nS\nHOH\nMFJ\nMFS")
        out = False
    return out



def calculateTaxesDue(FederalTaxes, salaries, bracketString):
    if(bracketString == "MFJ"):
        salaries = [sum(salaries)]
    output = []
    for annualSalary in salaries:
        taxableIncome = annualSalary - FederalTaxes[bracketString]["Witholding"]
        stillTaxable = taxableIncome
        TaxesDue = 0
        actualMax = 0
        i = 0

        while(stillTaxable >= 0):
            if(i >= len(FederalTaxes[bracketString]["Bracket"]) - 1):
                actualMax = taxableIncome
            elif stillTaxable > FederalTaxes[bracketString]["Bracket"][i+1]-1:
                actualMax = FederalTaxes[bracketString]["Bracket"][i+1]-1
            else:
                actualMax = taxableIncome

            TaxesDue = TaxesDue + (0.01 * FederalTaxes['Rate'][i] * (actualMax - FederalTaxes[bracketString]["Bracket"][i]) )
            stillTaxable = stillTaxable - actualMax
            i = i + 1
        output.append(TaxesDue)
    return output


if(parseArgs(sys.argv)):
    li = calculateTaxesDue(FED_TAXES, [float(sys.argv[1]),float(sys.argv[2])], sys.argv[3])
    j = 1
    for i in li:
        print("Taxes for Person ", j, ": ", i)
        j = j + 1
    print("Total Taxes: ", sum(li))
