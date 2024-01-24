export const data: Data = {
  report: [],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

data.report.push(
  {
    id: 'uuid1',
    source: 'Salary',
    amount: 191,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: 'uuid2',
    source: 'Food',
    amount: 1100,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
  },
);
