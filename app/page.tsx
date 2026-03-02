export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#f4f5f9] relative">

      {/* 🔵 FONDO AZUL */}
      <div className="bg-[#162a82] h-[340px] w-full absolute top-0 left-0"></div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="pt-6 flex justify-between text-white">
          <span className="text-sm opacity-80">← Go Back</span>
          <h1 className="text-2xl font-bold tracking-widest">2013</h1>
          <span>≡</span>
        </div>

        {/* 🟦 CONTENEDOR 1 — STEPS (SUPERPUESTO) */}
        <div className="mt-10 bg-[#23379c] rounded-md px-8 py-5 flex justify-between items-center text-white shadow-lg">
          <div className="flex gap-8">
            <Step active number={1} label="Personal details" />
            <Step number={2} label="Order details" />
            <Step number={3} label="Payment" />
            <Step number={4} label="Confirmation" />
          </div>
          <span className="hidden md:block opacity-80">← Previous step</span>
        </div>

        {/* 🔳 CONTENEDORES PRINCIPALES SUPERPUESTOS */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* 🟫 CONTENEDOR 2 — ORDER */}
          <div className="lg:col-span-2 bg-[#f1f2f6] rounded-md shadow-md p-6">
            <div className="flex justify-between mb-6">
              <h2 className="font-semibold">Order items</h2>
              <span className="text-sm text-gray-500">✎ Edit shopping cart</span>
            </div>

            <OrderItem />
            <OrderItem />
            <OrderItem noBorder />

            <div className="mt-6 text-center text-sm text-[#23379c]">
              Have discount code? Click to enter it.
            </div>
          </div>

          {/* DERECHA */}
          <div className="space-y-6 relative">

            {/* ⬜ CONTENEDOR 3 — SUMMARY (más elevado) */}
            <div className="bg-white rounded-md shadow-xl p-6">
              <h2 className="font-semibold mb-2">Summary</h2>
              <p className="text-xs text-gray-500 mb-4">
                The total cost consist of the tax, insurance and the delivery charge.
              </p>

              <PriceRow label="Subtotal" value="€ 56.40" />
              <PriceRow label="Delivery" value="FREE" bold />
              <PriceRow label="Tax" value="€ 11.84" />
              <PriceRow label="Insurance" value="€ 7.00" />

              <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
                <span>TOTAL:</span>
                <span>€ 75.24</span>
              </div>
            </div>

            {/* 🟫 CONTENEDOR 4 — DELIVERY */}
            <div className="bg-[#f1f2f6] rounded-md shadow-md p-5 flex justify-between items-center">
              <span className="font-medium">Delivery</span>
              <div className="w-8 h-8 border rounded-full flex items-center justify-center">
                +
              </div>
            </div>

            {/* 🔵 BOTÓN INDEPENDIENTE */}
            <button className="w-full bg-[#162a82] text-white py-4 rounded-md font-medium shadow-md hover:opacity-95 transition">
              Next step
            </button>

          </div>
        </div>

        {/* LÍNEA PUNTEADA */}
        <div className="mt-20 border-t border-dashed border-gray-300"></div>

        {/* FOOTER */}
        <div className="grid md:grid-cols-3 gap-10 text-center text-sm text-gray-600 mt-14 pb-20">
          <Bottom icon="🔒" title="Your information is Safe" />
          <Bottom icon="🛡️" title="Secure checkout" />
          <Bottom icon="🎧" title="24/7 Support" />
        </div>

      </div>
    </div>
  );
}

/* COMPONENTES */

function Step({ number, label, active = false }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
        ${active ? "bg-[#f4b740] text-black" : "bg-white text-black"}`}>
        {number}
      </div>
      <span className="hidden md:block">{label}</span>
    </div>
  );
}

function OrderItem({ noBorder }: any) {
  return (
    <div className={`flex justify-between py-6 ${!noBorder && "border-b border-gray-200"}`}>
      <div className="flex gap-4">
        <div className="w-14 h-14 bg-white rounded-md shadow-sm"></div>
        <div>
          <p className="font-medium">Tempered glass for Iphone</p>
          <p className="text-xs text-gray-500">Size: Iphone 7, Iphone 8</p>
          <p className="text-xs text-gray-500">Quantity: 4 items</p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">€ 20.00</p>
        <p className="text-xs text-gray-500">€ 5.00 per item</p>
      </div>
    </div>
  );
}

function PriceRow({ label, value, bold = false }: any) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span>{label}</span>
      <span className={bold ? "font-semibold text-green-600" : ""}>{value}</span>
    </div>
  );
}

function Bottom({ icon, title }: any) {
  return (
    <div>
      <div className="text-2xl mb-3 text-[#f4b740]">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-xs">
        The total cost consist of the tax, insurance and the delivery charge.
      </p>
    </div>
  );
}