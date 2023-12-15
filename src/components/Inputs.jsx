export default function Inputs({onFilter}) {
    return (
        <>
            <div className="flex justify-center gap-2 py-2">
                <div className="flex flex-row-reverse gap-2">
                    <input className="border border-black rounded" type="text" name="name" onInput={(e) => onFilter('name', e.currentTarget.value)}/>
                    <label htmlFor="name">نام تغییر دهنده</label>
                </div>
                <div className="flex flex-row-reverse gap-2">
                    <input className="border border-black rounded" type="text" name="date" onInput={(e) => onFilter('date', e.currentTarget.value)}/>
                    <label htmlFor="date">تاریخ</label>
                </div>
                <div className="flex flex-row-reverse gap-2">
                    <input className="border border-black rounded" type="text" name="title" onInput={(e) => onFilter('title', e.currentTarget.value)}/>
                    <label htmlFor="title">نام آگهی</label>
                </div>
                <div className="flex flex-row-reverse gap-2">
                    <input className="border border-black rounded" type="text" name="field" onInput={(e) => onFilter('field', e.currentTarget.value)}/>
                    <label htmlFor="field">فیلد</label>
                </div>
            </div>
        </>
    );
}