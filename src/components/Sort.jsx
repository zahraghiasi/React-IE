export default function Sort({onSelect}) {
    return (
        <>
            <div className="text-right mr-5 mb-3">
                <label htmlFor="sort">مرتب سازی:</label>
                <select className="border mx-2 rounded" defaultValue="selected" name="sort" id="cars" onInput={(e) => onSelect(e.currentTarget.value)}>
                    <option value="selected">انتخاب کنید</option>
                    <option value="name">نام</option>
                    <option value="date">تاریخ</option>
                    <option value="title">عنوان</option>
                    <option value="field">فیلد</option>
                </select>
            </div>
        </>
    );
}