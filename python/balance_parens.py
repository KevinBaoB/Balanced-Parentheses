def balance_parens(par) :
    stack=[]
    split_str=list(par)
    for i in range(len(par)):
        if par[i]=='(':
            stack.append(i)
        elif par[i]==')':
            if len(stack) !=0:
                    stack.pop()
            else:
                split_str[i]=""
    for i in stack:
        split_str[i]=""
    return '' .join(split_str)


print(balance_parens("a(b)c)"))
print(balance_parens('()'))
print(balance_parens(')('))