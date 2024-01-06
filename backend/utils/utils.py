import os



def get_error_obj(info, err):
    exc_type, exc_obj, exc_tb = info
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    error_class = err.__class__.__name__ 
    error_class = str(error_class)
    error_name = str(err)
    error = {
        "exception_type"  : error_class,
        "file_name" : fname,
        "line_number" : exc_tb.tb_lineno,
        "error_name" : error_name,
        }
    return error