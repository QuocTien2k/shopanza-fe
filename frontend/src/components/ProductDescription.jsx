

const ProductDescription = () => {
    return (
        <div className="ring-1 ring-slate-900/10 rounded-lg">
            <div className="text-red-600">
                <button className="medium-14 p-3 w-32 border-secondary">Description</button>
            </div>
            <hr className="h-[1px] w-full" />
            <div className="flex flex-col gap-3 p-3">
                <div>
                    <h5 className="h5">Detail</h5>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry{"'"}s standard dummy text ever since the 1500s,when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <h5 className="h5">Benefit</h5>
                    <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
                        <li>High-quality materials ensure long-lasting durability and comfort</li>
                        <li>Desined to meet the needs of modern, active lifestyles.</li>
                        <li>Available in a wide range of colrs and trendy colors.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription