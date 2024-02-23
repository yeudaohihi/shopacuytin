@extends('admin.layouts.master')
@section('title', 'Admin: Accounts Item In Stock')
@section('css')
  <link rel="stylesheet" type="text/css" href="/_admin/css/vendors/dropzone.css">
@endsection
@section('content')
  <div class="card">
    <div class="card-header">
      <h4>Danh sách tài khoản trong kho - <a href="?sold=1">Đã Bán</a> / <a href="?sold=0">Chưa Bán</a> / <a href="?">Tất Cả</a></h4>
    </div>
    <div class="card-body">
      <div>
        <form id="filter">
          <div class="mb-3 row">
            <div class="col-md-3">
              <label for="group" class="form-label">Nhóm</label>
              <select name="group" id="group" class="form-select">
                <option value="">Tất cả</option>
                @foreach ($groups as $group)
                  <option value="{{ $group->id }}" @if (request()->input('group') == $group->id) selected @endif>{{ $group->name }}</option>
                @endforeach
              </select>
            </div>
            <div class="col-md-3">
              <label for="sold" class="form-label">Trạng thái</label>
              <select name="sold" id="sold" class="form-select">
                <option value="">Tất cả</option>
                <option value="1" @if (request()->input('sold') == 1) selected @endif>Đã bán</option>
                <option value="0" @if (request()->input('sold') == 0) selected @endif>Chưa bán</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="buyer_name" class="form-label">Người mua</label>
              <input type="text" class="form-control" id="buyer_name" name="buyer_name" value="{{ request()->input('buyer_name') }}">
            </div>
            <div class="col-md-3">
              <label for="username" class="form-label">Tài khoản</label>
              <input type="text" class="form-control" id="username" name="username" value="{{ request()->input('username') }}">
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-3">
              <label for="start_date" class="form-label">Ngày bắt đầu</label>
              <input type="date" class="form-control" id="start_date" name="start_date" value="{{ request()->input('start_date') }}">
            </div>
            <div class="col-md-3">
              <label for="end_date" class="form-label">Ngày kết thúc</label>
              <input type="date" class="form-control" id="end_date" name="end_date" value="{{ request()->input('end_date') }}">
            </div>
            <div class="col-md-3">
              <label for="domain" class="form-label">Tên miền</label>
              <input type="text" class="form-control" id="domain" name="domain" value="{{ request()->input('domain') }}">
            </div>
          </div>
          <div class="text-center mb-3">
            <button type="submit" class="btn btn-primary">Lọc dữ liệu</button>
            <button type="button" class="btn btn-danger ids-action" onclick="deleteList()"><i class="fa fa-trash"></i> Xoá <span class="checked-count">0</span> sản phẩm</button>
          </div>
        </form>
      </div>

      <div class="table-responsive theme-scrollbar">
        <table class="display table-bordered table-stripped text-nowrap datatable1 table text-center">
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="check_all" />
              </th>
              <th>#</th>
              <th>Nhóm</th>
              <th>Thao tác</th>
              <th>Tài khoản</th>
              <th>Mã sản phẩm</th>
              <th>Giá bán</th>
              <th>Giá nhập</th>
              <th>% Giảm giá</th>
              <th>Ảnh sản phẩm</th>
              <th>Người mua</th>
              <th>Ngày mua</th>
              <th>Thanh toán</th>
              <th>Mã đơn hàng</th>
              <th>Trạng thái</th>
              <th>Ngày thêm</th>
              <th>Tên miền</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($items as $item)
              <tr>
                <td>
                  <input type="checkbox" class="check_item" value="{{ $item->id }}" />
                </td>
                <td>{{ $item->id }}</td>
                <td>
                  <a href="{{ route('admin.accounts.items', ['id' => $item->group_id]) }}">#{{ $item->group_id }}</a>
                </td>
                <td>
                  <a href="{{ route('admin.accounts.items.show', ['id' => $item->id]) }}" class="btn btn-primary btn-xs sharp me-1 shadow"><i class="fa fa-pencil"></i> sửa</a>
                  <a href="javascript:deleteRow({{ $item->id }})" class="btn btn-danger btn-xs sharp me-1 shadow"><i class="fa fa-trash"></i> xoá</a>
                </td>
                <td>{{ $item->username }}</td>
                <td>#{{ $item->code }}</td>
                <td>{{ Helper::formatCurrency($item->price) }}</td>
                <td>{{ Helper::formatCurrency($item->cost) }}</td>
                <td>{{ $item->discount }}%</td>
                <td><img src="{{ asset($item->image) }}" width="40"></td>
                <td>{{ $item->buyer_name ?? '-' }}</td>
                <td>{{ $item->buyer_date ?? '-' }}</td>
                <td><span class="text-danger">{{ Helper::formatCurrency($item->buyer_paym ?? 0) }}</span></td>
                <td>{{ $item->buyer_code ?? '-' }}</td>
                <td>{!! $item->is_sold === true ? '<span class="text-success">Đã bán</span>' : '<span class="text-danger">Chưa bán</span>' !!}</td>
                <td>{{ $item->created_at }}</td>
                <td>{{ $item->domain ?? '-' }}</td>
              </tr>
            @endforeach
          </tbody>
        </table>
      </div>
    </div>
  </div>
@endsection
@section('scripts')
  <script>
    // checkbox table
    $("#check_all").click(function() {
      if ($(this).is(":checked")) {
        $(".check_item").prop("checked", true);
      } else {
        $(".check_item").prop("checked", false);
      }
    });

    $(".check_item").click(function() {
      if ($(".check_item:checked").length == $(".check_item").length) {
        $("#check_all").prop("checked", true);
      } else {
        $("#check_all").prop("checked", false);
      }
    });

    const getIds = () => {
      let ids = [];
      $(".check_item:checked").each(function() {
        ids.push($(this).val());
      });
      return ids;
    }

    // event to class checked-count, checked-ids
    const updateChecked = () => {
      let ids = getIds();
      $(".checked-count").text(ids.length);

      if (ids.length > 0) {
        $(".ids-action").removeClass('disabled btn-disabled')
      } else {
        $(".ids-action").addClass('disabled btn-disabled')
      }
    }

    $(".check_item").click(function() {
      updateChecked();
    });

    $("#check_all").click(function() {
      updateChecked();
    });

    updateChecked();

    //

    $(document).ready(function() {
      $('.datatable1').DataTable({
        language: {
          searchPlaceholder: 'Search...',
          sSearch: '',
        },
        response: false,
        order: [
          [1, 'desc']
        ],
        lengthMenu: [
          [10, 25, 50, 100, 200, -1],
          [10, 25, 50, 100, 200, "Tất cả"]
        ],
        retrieve: true,
        columnDefs: [{
          targets: 0,
          orderable: false,
          searchable: false,
        }],
      })
    })

    const deleteList = async () => {
      const ids = getIds()

      if (ids.length === 0) {
        Swal.fire('Thất bại', 'Vui lòng chọn ít nhất 1 proxy để xoá', 'error')
        return
      }

      const confirm = await Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa?',
        text: "Bạn sẽ không thể khôi phục lại dữ liệu này!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
      })

      if (!confirm.isConfirmed) return

      $showLoading()

      try {
        const {
          data: result
        } = await axios.post('{{ route('admin.accounts.items.delete-list') }}', {
          ids: ids
        })

        Swal.fire('Thành công', result.message, 'success').then(() => {
          window.location.reload();
        })
      } catch (error) {
        Swal.fire('Thất bại', $catchMessage(error), 'error')
      }
    }

    const deleteRow = async (id) => {
      const confirmDelete = await Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa?',
        text: "Bạn sẽ không thể khôi phục lại dữ liệu này!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
      });

      if (!confirmDelete.isConfirmed) return;

      $showLoading();

      try {
        const {
          data: result
        } = await axios.post('{{ route('admin.accounts.items.delete') }}', {
          id
        })

        Swal.fire('Thành công', result.message, 'success').then(() => {
          window.location.reload();
        })
      } catch (error) {
        Swal.fire('Thất bại', $catchMessage(error), 'error')
      }
    }
  </script>
@endsection
