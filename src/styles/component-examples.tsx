import React from 'react';
import theme from './theme';

// Example components showcasing the theme styling patterns

export const Button = {
    Primary: () => (
        <button className={theme.components.button.primary}>
            Submit
        </button>
    ),
    Secondary: () => (
        <button className={theme.components.button.secondary}>
            Cancel
        </button>
    ),
    Danger: () => (
        <button className={theme.components.button.danger}>
            Delete
        </button>
    ),
};

export const Badge = {
    Success: ({ children }: { children: React.ReactNode }) => (
        <span className={`${theme.components.badge.base} ${theme.components.badge.success}`}>
            {children}
        </span>
    ),
    Info: ({ children }: { children: React.ReactNode }) => (
        <span className={`${theme.components.badge.base} ${theme.components.badge.info}`}>
            {children}
        </span>
    ),
    Warning: ({ children }: { children: React.ReactNode }) => (
        <span className={`${theme.components.badge.base} ${theme.components.badge.warning}`}>
            {children}
        </span>
    ),
    Danger: ({ children }: { children: React.ReactNode }) => (
        <span className={`${theme.components.badge.base} ${theme.components.badge.danger}`}>
            {children}
        </span>
    ),
};

export const Card = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className={theme.components.card.base}>
        <h3 className={theme.components.card.header}>{title}</h3>
        {children}
    </div>
);

export const Input = {
    Text: ({ label, placeholder }: { label: string, placeholder: string }) => (
        <div>
            <label className={theme.components.input.label}>{label}</label>
            <input type="text" className={theme.components.input.base} placeholder={placeholder} />
        </div>
    ),
    Textarea: ({ label, placeholder }: { label: string, placeholder: string }) => (
        <div>
            <label className={theme.components.input.label}>{label}</label>
            <textarea className={theme.components.input.base} placeholder={placeholder} rows={3} />
        </div>
    ),
    Select: ({ label, options }: { label: string, options: string[] }) => (
        <div>
            <label className={theme.components.input.label}>{label}</label>
            <select className={theme.components.input.base}>
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    ),
};

export const Table = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
    <div className={theme.components.table.container}>
        <table className="w-full text-xs">
            <thead className={theme.components.table.header}>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className={theme.components.table.headerCell}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={theme.components.table.row}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className={theme.components.table.cell}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const Header = ({ title, badge }: { title: string, badge?: string }) => (
    <div className={theme.components.header.page}>
        <div className="flex justify-between items-center">
            <h1 className={theme.components.header.title}>{title}</h1>
            {badge && (
                <span className="bg-blue-100 text-blue-800 text-[8px] px-1 py-0.5 rounded-full">
                    {badge}
                </span>
            )}
        </div>
    </div>
);

export const Layout = ({ header, children }: { header: React.ReactNode, children: React.ReactNode }) => (
    <div className={theme.components.layout.container}>
        {header}
        <div className={theme.components.layout.content}>
            {children}
        </div>
    </div>
);

// Example usage component
const StyleGuideExample = () => {
    return (
        <Layout
            header={<Header title="Style Guide Example" badge="Example" />}
        >
            <div className="space-y-4">
                {/* Buttons Section */}
                <Card title="Buttons">
                    <div className="flex space-x-2">
                        <Button.Primary />
                        <Button.Secondary />
                        <Button.Danger />
                    </div>
                </Card>

                {/* Badges Section */}
                <Card title="Badges">
                    <div className="flex space-x-2">
                        <Badge.Success>Success</Badge.Success>
                        <Badge.Info>Info</Badge.Info>
                        <Badge.Warning>Warning</Badge.Warning>
                        <Badge.Danger>Danger</Badge.Danger>
                    </div>
                </Card>

                {/* Forms Section */}
                <Card title="Form Elements">
                    <div className="space-y-2">
                        <Input.Text label="Username" placeholder="Enter your username" />
                        <Input.Textarea label="Description" placeholder="Enter a description" />
                        <Input.Select
                            label="Category"
                            options={['Breakfast', 'Lunch', 'Dinner', 'Snack']}
                        />
                    </div>
                </Card>

                {/* Table Section */}
                <Card title="Data Table">
                    <Table
                        headers={['Product', 'Price', 'Stock', 'Actions']}
                        rows={[
                            ['Organic Apples', '12 TL/kg', '25 kg', 'Edit Delete'],
                            ['Fresh Eggs', '2 TL/each', '50 units', 'Edit Delete'],
                            ['Whole Wheat Bread', '5 TL/loaf', '15 loaves', 'Edit Delete'],
                        ]}
                    />
                </Card>
            </div>
        </Layout>
    );
};

export default StyleGuideExample; 