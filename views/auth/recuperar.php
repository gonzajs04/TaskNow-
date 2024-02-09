<section class="contenedor recuperar">

    <?php include_once __DIR__ . '/../templates/nombre-sitio.php'; ?>


    <form action="/recuperar" method="POST" class="formulario">
        <div class="campo">
            <label for="email">Email</label>
            <input type="email" name="email" id="Email" placeholder="Tu email">
        </div>

        <input type="submit" value="Enviar mail">

    </form>


    <div class="acciones">
        <a href="/">¿Ya recordaste tu contraseña?</a>
        <a href="/crear">¿Aun no tienes una cuenta? Obtener una</a>
    </div>

</section>