const salary = 3000;

let iNSS_aliquot_less_than_1556_94 = 0.08 * salary;
let iNSS_aliquot_1556_95_to_2594_92 = 0.09 * salary;
let iNSS_aliquot_2594_93_to_5189_82 = 0.11 * salary;
let iNSS_aliquot_over_5189_82 = 570.88;

let salaryINSS;

if (salary > 5189.82) {
    salaryINSS = salary - iNSS_aliquot_over_5189_82;
} else 
if (salary >= 2594.93 && salary <= 5189.82) {
    salaryINSS = salary - iNSS_aliquot_2594_93_to_5189_82;
} else
if (salary >= 1556.95 && salary < 2594.92) {
    salaryINSS = salary - iNSS_aliquot_1556_95_to_2594_92;
} else {
    salaryINSS = salary - iNSS_aliquot_less_than_1556_94;
}

let tax_1903_98 = 0
let tax_1903_99_to_2826_65 = (salaryINSS * 0.075) - 142.80
let tax_2826_66_to_3751_05 = (salaryINSS * 0.15) - 354.80
let tax_3751_06_to_4664_68 = (salaryINSS * 0.225) - 636.13
let tax_4664_68_and_above = (salaryINSS * 0.275) - 869.36

let taxedSalary;

if (salaryINSS > 4664.68) {
    taxedSalary = salaryINSS - tax_4664_68_and_above;
} else
if (salaryINSS >= 3751.06 && salaryINSS <= 4664.68) {
    taxedSalary = salaryINSS - tax_3751_06_to_4664_68;
} else
if (salaryINSS >= 2826.66 && salaryINSS <= 3751.05) {
    taxedSalary = salaryINSS - tax_2826_66_to_3751_05
} else
if (salaryINSS >= 1903.99 && salaryINSS <= 2826.65) {
    taxedSalary = salaryINSS - tax_1903_99_to_2826_65
} else {
    taxedSalary = salaryINSS - tax_1903_98
}

console.log(taxedSalary)