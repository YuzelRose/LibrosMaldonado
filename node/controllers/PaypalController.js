import paypal from '@paypal/checkout-server-sdk';

// Uso de variables de entorno para las credenciales de PayPal
const environment = new paypal.core.SandboxEnvironment(
    'AQ0hxJYHzi66bv-qKOzzLfzOqlL_rZoAkWlXYU7nkJ5j1slrzSEZSC7KgwupwT9j9LGugEvoSU6FrHIe',
    'EP6CdQMrLV45gRgsFAC5YWnjv9rknpVwfe3xOhyzl_1epx-hmlJQgwwN6Vrjdp3-3lym15e-i6UdxHBg'
);
const client = new paypal.core.PayPalHttpClient(environment);

// Función para calcular el total
const calcTotal = (shiping, finalPrice) => {
    return finalPrice - shiping;
}

// Función para crear el pago
export const NewPayment = async (req, res) => {
    const { finalPrice, prodPrice, totalCant, prodCant, prodName, shiping } = req.body;

    // Validación básica de los datos
    if (!finalPrice || !prodPrice || !totalCant || !prodCant || !prodName || !shiping) {
        return res.status(400).json({ message: 'Faltan datos en la solicitud' });
    }

    try {
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");

        // Configuración del cuerpo de la solicitud
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "MXN",
                        value: `${finalPrice}`,
                        breakdown: {
                            item_total: { currency_code: "MXN", value: calcTotal(shiping, finalPrice) },
                            shipping: { currency_code: "MXN", value: shiping }
                        },
                    },
                    items: [
                        {
                            name: prodName,
                            unit_amount: { currency_code: "MXN", value: prodPrice },
                            quantity: prodCant,
                        }
                    ],
                },
            ],
        });

        // Enviar la solicitud a PayPal
        const order = await client.execute(request);

        // Si la orden se crea correctamente, devuelve la URL de aprobación de PayPal
        res.status(200).json({
            id: order.result.id,
            approval_url: order.result.links.find(link => link.rel === "approve").href
        });

    } catch (error) {
        console.error('Error al crear el pago de PayPal:', error);
        res.status(500).json({ message: 'Error al crear el pago', error: error.message });
    }
};