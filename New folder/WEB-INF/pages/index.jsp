<!DOCTYPE html>
<html lang="">
<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta charset="UTF-8">
        <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="javascrip/scrip.js"></script>
    <title>Xin chào tớ là Dương Đẹp Trai</title>
</head>
<body>
   <button id="dangnhap">Đăng nhập</button><button id="dangky">Đăng ký</button>
   <div>

   <form action="redirect" method="post" id="dnhap">
       Tài khoản: <input type="text" name="UserName"> <br>
       Mật khẩu: <input type="text" name="password"><br>
       <button>Đăng nhập</button>
       <input type="hidden" value="login" name="command">
   </form>

   <form action="redirect" method="post" id="dky">
      Tài khoản:  <input type="text" id="username" name="UserName">
       <input type="password" name="password">
       <input type="password" name="confirmpassword">
       <button>Đăng ký</button>
       <input type="hidden" value="register" name="command">
   </form>
  <a href="trangchu.jsp">trangchu</a>
   </div>


</body>
<script type="text/javascript">

</script>
</html>